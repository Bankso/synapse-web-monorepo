import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import { mockUserProfileData } from '../../../../mocks/user/mock_user_profile'
import { mockFileStatistics } from '../../../../mocks/mock_file_statistics'
import DownloadListTableV2, {
} from '../../../../lib/containers/download_list_v2/DownloadListTable'
import { useGetAvailableFilesToDownloadInfinite } from '../../../../lib/utils/hooks/SynapseAPI/useGetAvailableFilesToDownload'
import { DownloadListItemResult } from '../../../../lib/utils/synapseTypes/DownloadListV2/DownloadListItemResult'
import { SynapseTestContext } from '../../../../mocks/MockSynapseContext'

jest.mock('../../../../lib/utils/SynapseClient', () => {
  return {
    removeItemFromDownloadListV2: jest.fn(),
    getUserProfileById: jest
      .fn()
      .mockImplementation(() => Promise.resolve(mockUserProfileData)),
  }
})
jest.mock(
  '../../../../lib/utils/hooks/SynapseAPI/useGetAvailableFilesToDownload',
  () => {
    return {
      useGetAvailableFilesToDownloadInfinite: jest.fn(),
    }
  },
)

const mockFetchNextPage = jest.fn()
const mockRefetchStatistics = jest.fn()
const mockUseGetAvailableFilesToDownloadInfinite = useGetAvailableFilesToDownloadInfinite as jest.Mock

const page1: Partial<DownloadListItemResult>[] = [
  {
    fileEntityId: 'syn1',
    versionNumber: 1,
    createdOn: 'yesterday',
    addedOn: 'today',
    fileName: 'file1.txt',
    fileSizeBytes: 1,
    projectId: 'syn200',
    projectName: 'Project that has dataset',
    createdBy: '100000',
  },
]

const page2: Partial<DownloadListItemResult>[] = [
  {
    fileEntityId: 'syn2',
    versionNumber: 1,
    createdOn: 'yesterday',
    addedOn: 'today',
    fileName: 'file2.txt',
    fileSizeBytes: 2,
    projectId: 'syn200',
    projectName: 'Project that has dataset',
    createdBy: '100000',
  },
]

function renderComponent() {
  return render(
    <SynapseTestContext>
      <DownloadListTableV2 filesStatistics={mockFileStatistics} refetchStatistics={mockRefetchStatistics}/>
    </SynapseTestContext>,
  )
}

describe('DownloadListTableV2 tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it('loads more available download files when inView', async () => {
    mockAllIsIntersecting(true)
    mockUseGetAvailableFilesToDownloadInfinite.mockReturnValue({
      data: {
        pages: [
          {
            page: page1,
            nextPageToken: '50a0',
          },
          {
            page: page2,
            nextPageToken: null,
          },
        ],
        pageParams: [],
      },
      fetchNextPage: mockFetchNextPage,
      hasNextPage: true,
      isLoading: false,
      isSuccess: true,
    })

    renderComponent()

    const fileEntity1 = await screen.findAllByText('file1.txt')
    expect(fileEntity1).toHaveLength(1)
    const fileEntity2 = await screen.findAllByText('file2.txt')
    expect(fileEntity2).toHaveLength(1)
  })
})
