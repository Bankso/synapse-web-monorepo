import moment from 'moment'
import React, { useState, useCallback } from 'react'
import { SynapseClient, SynapseConstants } from '../../utils'
import { testDownloadSpeed } from '../../utils/functions/testDownloadSpeed'
import {
  AddFilesToDownloadListRequest,
  EntityType,
  QueryBundleRequest,
} from '../../utils/synapseTypes/'
import DownloadDetails from './DownloadDetails'
import DownloadListTable from './DownloadListTable'
import useDeepCompareEffect from 'use-deep-compare-effect'
import {
  TopLevelControlsState,
  QueryWrapperState,
  QUERY_FILTERS_COLLAPSED_CSS,
  QUERY_FILTERS_EXPANDED_CSS,
} from '../QueryWrapper'
import SignInButton from '../SignInButton'
import { Alert } from 'react-bootstrap'
import { useSynapseContext } from '../../utils/SynapseContext'
import { AddToDownloadListRequest } from '../../utils/synapseTypes/DownloadListV2/AddToDownloadListRequest'
import { useGetEntityChildren } from '../../utils/hooks/SynapseAPI/useGetEntityChildren'
import useGetQueryResultBundle from '../../utils/hooks/SynapseAPI/useGetQueryResultBundle'
import { useGetDownloadListStatistics } from '../../utils/hooks/SynapseAPI/useGetDownloadListStatistics'
import { displayToast } from '../ToastMessage'

enum StatusEnum {
  LOADING_INFO,
  PROCESSING,
  INFO,
  SIGNED_OUT,
  DONE
}

export type DownloadConfirmationState = {
  fileCount: number
  fileSize: number
  downloadEstimate?: string
  errorMessage?: string
}

export type DownloadConfirmationProps = {
  fnClose?: () => void
  getLastQueryRequest?: () => QueryBundleRequest
  folderId?: string
  topLevelControlsState?: TopLevelControlsState
  updateParentState?: <K extends keyof QueryWrapperState>(
    param: Pick<QueryWrapperState, K>,
  ) => void
  downloadCartPageUrl?: string
}

// add files to download list
async function addToDownload(
  token: string,
  queryBundleRequest?: QueryBundleRequest,
  folderId?: string,
  goToDownloadListFn?: () => void,
): Promise<[StatusEnum, string]> {
  try {
    if (!SynapseClient.isInSynapseExperimentalMode()) {
      const req: AddFilesToDownloadListRequest = {
        concreteType:
          'org.sagebionetworks.repo.model.file.AddFileToDownloadListRequest',
        query: queryBundleRequest?.query,
        folderId: folderId,
      }
      await SynapseClient.addFilesToDownloadList(req, token)
    } else {
      const req:AddToDownloadListRequest = {
        query: queryBundleRequest?.query,
        concreteType: 'org.sagebionetworks.repo.model.download.AddToDownloadListRequest',
        parentId: folderId,
      }
      await SynapseClient.addFilesToDownloadListV2(req, token)
    }
    displayToast(
      'File(s) were successfully added to your Download List.',
      'success',
      {
        primaryButtonText: 'View Download List',
        onPrimaryButtonClick: goToDownloadListFn,
      }
    )
    return [StatusEnum.DONE, '']
  } catch (error) {
    displayToast(
      'danger',
      undefined,
      error.reason
    )

    return [StatusEnum.DONE, '']
  }
}

type UiStateDictionary = {
  [key: string]: {
    className: string
    infoText: string | JSX.Element
    closeText: string
  }
}

// css classes, text, and close button text associated with different stages
const StatusConstruct: UiStateDictionary = {
  [StatusEnum.INFO]: {
    className: 'alert-info',
    infoText: 'Would you like to add all files to the download list?',
    closeText: 'Cancel',
  },

  [StatusEnum.PROCESSING]: {
    className: 'alert-info',
    infoText: 'Adding Files To List',
    closeText: 'Cancel',
  },

  [StatusEnum.LOADING_INFO]: {
    className: 'alert-info',
    infoText: 'Calculating File Size',
    closeText: 'Cancel',
  },
  [StatusEnum.SIGNED_OUT]: {
    className: 'alert-danger',
    closeText: 'Close',
    infoText: (
      <>
        Please <SignInButton style={{ color: '#337ab7' }} /> to add files to
        your download list.
      </>
    ),
  },
}

//============= DownloadConfirmation component =============

export const DownloadConfirmation: React.FunctionComponent<DownloadConfirmationProps> = ({
  getLastQueryRequest,
  folderId,
  fnClose,
  updateParentState,
  topLevelControlsState,
  downloadCartPageUrl='/DownloadCart',
}) => {
  const { accessToken } = useSynapseContext()
  const { showDownloadConfirmation = true } = topLevelControlsState ?? {}
  const [status, setStatus] = useState<StatusEnum>(accessToken ? StatusEnum.LOADING_INFO : StatusEnum.SIGNED_OUT)
  const [state, setState] = useState<DownloadConfirmationState>({
    fileCount: 0,
    fileSize: 0
  })
  const {
    refetch,
  } = useGetDownloadListStatistics()
  
  const lastQueryRequest = getLastQueryRequest!()
     // is not defined (configured for a container)
  const [showDownloadList, setShowDownloadList] = useState(false)
  
  const updateStats = useCallback(async (count?: number, bytes?: number) => {
    if (accessToken) {
      const estimatedDownloadBytesPerSecond = await testDownloadSpeed(accessToken)
      const size = bytes ?? 0
      const fileCount = count ?? 0
      const durationSeconds = size / estimatedDownloadBytesPerSecond
      const duration = moment.duration(durationSeconds, 'seconds').humanize()
      setStatus(StatusEnum.INFO)
      setState({
        fileCount: fileCount,
        fileSize: size,
        downloadEstimate: duration,
      })
    }
  }, [accessToken])

  const {
    data: entityChildrenData,
    isSuccess
  } = useGetEntityChildren (
    {
      parentId: folderId,
      includeSumFileSizes: true,
      includeTotalChildCount: true,
      includeTypes: [EntityType.FILE]
    }
  )
  useDeepCompareEffect(() => {
    if (isSuccess && entityChildrenData) {
      updateStats(entityChildrenData.totalChildCount, entityChildrenData.sumFileSizesBytes)
    }
  }, [updateStats, folderId, isSuccess, entityChildrenData])

  const partMask =
  SynapseConstants.BUNDLE_MASK_QUERY_COUNT |
  SynapseConstants.BUNDLE_MASK_SUM_FILES_SIZE_BYTES

  const queryBundleRequestSizeInformation: QueryBundleRequest = {
    ...lastQueryRequest,
    partMask,
  }

  const { data: queryResultBundle } = useGetQueryResultBundle(
    queryBundleRequestSizeInformation,
  )

  useDeepCompareEffect(() => {
    if (queryResultBundle) {
      updateStats(queryResultBundle.queryCount, queryResultBundle.sumFileSizes?.sumFileSizesBytes)
    }
  }, [updateStats, lastQueryRequest, queryResultBundle])

  const onCancel = fnClose
    ? () => fnClose()
    : () => {
        updateParentState!({
          topLevelControlsState: {
            ...topLevelControlsState!,
            showDownloadConfirmation: false,
          },
        })
      }

  const triggerAddToDownload = async () => {
    if (!accessToken) {
      setStatus(StatusEnum.SIGNED_OUT)
    } else {
      setStatus(StatusEnum.PROCESSING)
      const goToDownloadListFn = () => setShowDownloadList(true)
      const result = await addToDownload(accessToken, lastQueryRequest, folderId, goToDownloadListFn)
      const newStatus = result[0]
      setStatus(newStatus)
      refetch()
      if (newStatus !== StatusEnum.DONE) {
        setState({ ...state, errorMessage: result[1] })
      }
    }
  }

  const getContent = (
    { fileCount, fileSize, errorMessage }: DownloadConfirmationState,
  ): JSX.Element => {
    switch (status) {
      case StatusEnum.LOADING_INFO:
      case StatusEnum.PROCESSING:
        return (
          <div>
            <span className={'spinner white'} />
            <span className={'spinner__text'}>
              {StatusConstruct[status].infoText}
            </span>
          </div>
        )

      case StatusEnum.SIGNED_OUT:
        return <>{StatusConstruct[status].infoText}</>
      case StatusEnum.INFO:
        return (
          <>
            <DownloadDetails
              numFiles={fileCount}
              numBytes={fileSize}
            ></DownloadDetails>
            <span>{StatusConstruct[status].infoText}</span>
          </>
        )

      default:
        return <></>
    }
  }
  if (showDownloadList && SynapseClient.isInSynapseExperimentalMode()) {
    // go to the Download Cart Page
    if (downloadCartPageUrl)
      window.location.href = downloadCartPageUrl
    else
      console.error('Missing the Download Cart Page URL in the component configuration.')
  }
  const showFacetFilter = topLevelControlsState?.showFacetFilter
  return (
    <>
      <Alert
        dismissible={false}
        show={true}
        variant={'info'}
        transition={false}
        className={`download-confirmation ${
          StatusConstruct[status].className
        } ${showDownloadConfirmation ? '' : 'hidden'}
          ${
            showFacetFilter
              ? QUERY_FILTERS_EXPANDED_CSS
              : QUERY_FILTERS_COLLAPSED_CSS
          }
        `}
      >
        <div>{getContent(state)}</div>
        <div className="download-confirmation-action">
          {status !== StatusEnum.PROCESSING && (
            <button className="btn btn-link" onClick={onCancel}>
              {StatusConstruct[status].closeText}
            </button>
          )}

          {status === StatusEnum.INFO && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={triggerAddToDownload}
            >
              Add
            </button>
          )}
        </div>
      </Alert>
      {showDownloadList && !SynapseClient.isInSynapseExperimentalMode() && (
        <DownloadListTable
          renderAsModal={true}
          onHide={() => setShowDownloadList(false)}
        />
      )}
    </>
  )
}
