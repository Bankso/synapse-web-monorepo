import React, { useEffect, useState } from 'react'
import {
  BatchFileRequest,
  FileHandleAssociateType,
  FileEntity,
  ExternalFileHandle,
  assertIsExternalFileHandle,
  isFileEntity,
} from '../utils/synapseTypes'
import { SynapseClient } from '../utils/'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSynapseContext } from '../utils/SynapseContext'
import { AssertionError } from 'assert'

library.add(faExternalLinkAlt)

export type ExternalFileHandleLinkProps = {
  synId: string
  className?: string
}

export const ExternalFileHandleLink = (props: ExternalFileHandleLinkProps) => {
  const { accessToken } = useSynapseContext()
  const { synId, className } = props
  const [data, setData] = useState<
    | { fileEntity: FileEntity; externalFileHandle: ExternalFileHandle }
    | undefined
  >(undefined)
  useEffect(() => {
    const getEntity = async () => {
      try {
        const fileEntity = await SynapseClient.getEntity<FileEntity>(
          accessToken,
          synId,
        )
        if (!isFileEntity(fileEntity)) {
          throw new AssertionError({
            message: `File Entity expected but found ${fileEntity}`,
          })
        }
        const batchFileRequest: BatchFileRequest = {
          requestedFiles: [
            {
              associateObjectId: synId,
              associateObjectType: FileHandleAssociateType.FileEntity,
              fileHandleId: fileEntity.dataFileHandleId,
            },
          ],
          includeFileHandles: true,
          includePreSignedURLs: false,
          includePreviewPreSignedURLs: false,
        }
        const file = await SynapseClient.getFiles(batchFileRequest, accessToken)
        const externalFileHandle = file.requestedFiles[0].fileHandle
        assertIsExternalFileHandle(externalFileHandle)
        setData({
          externalFileHandle,
          fileEntity,
        })
      } catch (e) {
        console.error('Error on getting external file handle = ', e)
      }
    }
    getEntity()
  }, [synId, accessToken])

  const externalFileHandle = data?.externalFileHandle
  const fileEntity = data?.fileEntity

  return externalFileHandle ? (
    <a
      href={externalFileHandle.externalURL}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>
        {fileEntity?.name}
        <FontAwesomeIcon style={{ marginLeft: 5 }} icon="external-link-alt" />
      </span>
    </a>
  ) : (
    <></>
  )
}
