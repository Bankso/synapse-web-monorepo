import React from 'react'
import { AddBatchOfFilesToDownloadListResponse } from '../utils/synapseTypes/DownloadListV2/AddBatchOfFilesToDownloadListResponse'
import { addFileToDownloadListV2 } from '../utils/SynapseClient'
import IconSvg from './IconSvg'
import { useSynapseContext } from '../utils/SynapseContext'

export type AddToDownloadListV2Props = {
  entityId: string
  entityVersionNumber?: number
}

const AddToDownloadListV2: React.FunctionComponent<AddToDownloadListV2Props> = (props) => {

  const {entityId, entityVersionNumber} = props
  const { accessToken } = useSynapseContext()
  const addToDownloadListV2 = async () => {
    try {
      const result:AddBatchOfFilesToDownloadListResponse = await addFileToDownloadListV2(entityId, entityVersionNumber, accessToken)
      if (result.numberOfFilesAdded === 1)
        console.log(`Successfully added ${entityId} (version=${entityVersionNumber}) to the Download List v2`)
      else
        console.log(`Adding to the Download List v2 resulted in ${result.numberOfFilesAdded} files being added.`)
    } catch (e) {
      console.log("Failed to add to the Download List v2: ", e)
    }
  }

  return (
    <a onClick={addToDownloadListV2}>
      <IconSvg options={{icon: "addToCart"}} />
    </a>
  )
}

export default AddToDownloadListV2