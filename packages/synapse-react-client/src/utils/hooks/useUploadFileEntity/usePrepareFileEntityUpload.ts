import { SynapseClientError } from '@sage-bionetworks/synapse-client'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { useSynapseContext } from '../../context/index'
import { getFileEntityIdWithSameName } from './getFileEntityIdWithSameName'
import { useCreatePathsAndGetParentId } from './useCreatePathsAndGetParentId'

export type FilePreparedForUpload = {
  file: File
  parentId: string
  existingEntityId: string | null
}

export type PrepareDirsForUploadReturn = {
  newFileEntities: FilePreparedForUpload[]
  updatedFileEntities: FilePreparedForUpload[]
}

/**
 * Mutation used to check and prepare the entity tree just before uploading a list of files.
 *
 * Given a list of files and a parent ID in which the files should be uploaded, the mutation will:
 *
 * 1. Create the necessary Folder entities in which the files to be uploaded (e.g. if the user uploaded a folder)
 * 2. Check if any of the files to be uploaded already exist in the target parent folder
 *
 * The mutation will return two lists of files and their destination parentIds:
 *    - newFileEntities: New files that do not have corresponding file entities in the target parent folder
 *    - updatedFileEntities: Files that have corresponding file entities in the target parent folder. The user
 *        should be prompted to accept or reject the creation of a new version of the file.
 *
 * In the future, this sequence could be amended to check if the storage location has enough space to accommodate all the
 * new files, and return an error if not.
 *
 * @param options
 */
export function usePrepareFileEntityUpload(
  options?: Partial<
    UseMutationOptions<
      PrepareDirsForUploadReturn,
      SynapseClientError,
      { files: File[]; parentId: string }
    >
  >,
) {
  const { synapseClient } = useSynapseContext()
  const { mutateAsync: createDirsForFileList } = useCreatePathsAndGetParentId()

  return useMutation({
    ...options,
    mutationFn: async (args: { files: File[]; parentId: string }) => {
      const { files, parentId } = args

      // 1. Create directories for the files as needed
      const fileAndParentIds: { file: File; parentId: string }[] = []
      for (const file of files) {
        try {
          // Create the directories serially; if multiple files are uploaded, they may share new directories
          // Creating folders in parallel could cause race conditions
          fileAndParentIds.push(await createDirsForFileList({ file, parentId }))
        } catch (e) {
          throw new Error(
            `Unable to create target folder structure for file ${file.name}${
              Object.hasOwn(e, 'message') ? `: ${e.message}` : null
            }`,
            { cause: e },
          )
        }
      }

      // 2. Check for existing files, and prompt the user if a new version should be created
      const getExistingFilesResults = await Promise.allSettled(
        fileAndParentIds.map(fileAndParentId =>
          getFileEntityIdWithSameName(
            fileAndParentId.file.name,
            fileAndParentId.parentId,
            synapseClient,
            'The file could not be uploaded.',
          ).then(existingEntityId => ({
            ...fileAndParentId,
            existingEntityId,
          })),
        ),
      )

      const filesWithError: PromiseRejectedResult[] =
        getExistingFilesResults.filter(promise => promise.status === 'rejected')

      if (filesWithError.length > 0) {
        throw new Error(
          `Files could not be uploaded:\n\t${filesWithError
            .map(promise => (promise.reason as Error).message)
            .join('\n\t')}`,
        )
      }

      // Split the results into new and updated files
      const filesPreparedForUpload = getExistingFilesResults
        // All of these promises are fulfilled -- we use this filter to narrow the type
        .filter(promise => promise.status === 'fulfilled')
        .map(promise => promise.value)

      const newFileEntities = filesPreparedForUpload.filter(
        f => f.existingEntityId == null,
      )

      const updatedFileEntities = filesPreparedForUpload.filter(
        f => f.existingEntityId != null,
      )

      return { newFileEntities, updatedFileEntities }
    },
  })
}
