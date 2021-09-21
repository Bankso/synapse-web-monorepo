import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
  QueryStatus,
} from 'react-query'
import SortIcon from '../../../../assets/icons/Sort'
import { getEntityTypeFromHeader } from '../../../../utils/functions/EntityTypeUtils'
import {
  Direction,
  EntityHeader,
  ProjectHeader,
  SortBy,
} from '../../../../utils/synapseTypes'
import { Hit } from '../../../../utils/synapseTypes/Search'
import {
  SynapseErrorBoundary,
  TableRowFallbackComponent,
} from '../../../ErrorBanner'
import { HelpButtonPopover } from '../../../HelpButtonPopover'
import { SynapseSpinner } from '../../../LoadingScreen'
import { Checkbox } from '../../../widgets/Checkbox'
import { EntityDetailsListSharedProps } from '../EntityDetailsList'
import { DetailsViewRow, DetailsViewRowAppearance } from './DetailsViewRow'

export type DetailsViewProps = EntityDetailsListSharedProps & {
  entities: (EntityHeader | ProjectHeader | Hit)[]
  queryStatus: QueryStatus
  queryIsFetching: boolean
  hasNextPage?: boolean
  fetchNextPage?: <TData, TError>(
    options?: FetchNextPageOptions,
  ) => Promise<InfiniteQueryObserverResult<TData, TError>>
  /** The current sort of the view. If the view cannot be sorted, set this to `undefined` */
  sort?: { sortBy: SortBy; sortDirection: Direction }
  /** If sortable, `setSort` will be invoked when the user tries to change the sort */
  setSort?: (soryBy: SortBy, sortDirection: Direction) => void
  noResultsPlaceholder?: React.ReactElement
  /** We defer to the configuration component to determine this */
  selectAllCheckboxStatus?: boolean
}

/**
 * Displays a list of entities in a table.
 *
 * If the list of entities is paginated, the `hasNextPage` prop can be set to indicate that there is more data to load.
 * When the view is ready to load more data, the `fetchNextPage` callback will be invoked. The view is designed to handle
 * an "infinite scroll" pattern, so entities should not be removed from the list when loading the next page.
 *
 * @param param0
 */
export const DetailsView: React.FunctionComponent<DetailsViewProps> = ({
  entities,
  queryStatus,
  queryIsFetching,
  hasNextPage,
  fetchNextPage,
  showVersionSelection,
  mustSelectVersionNumber,
  selectColumnType,
  selected,
  visibleTypes,
  selectableTypes,
  toggleSelection,
  sort,
  setSort,
  noResultsPlaceholder,
  enableSelectAll,
  selectAllCheckboxStatus = false,
}) => {
  // Load the next page when this ref comes into view.
  const { ref, inView } = useInView()

  const showSelectColumn = selectColumnType !== 'none'

  const determineRowAppearance = (
    entity: EntityHeader | ProjectHeader | Hit,
  ): DetailsViewRowAppearance => {
    if (!visibleTypes.includes(getEntityTypeFromHeader(entity))) {
      return 'hidden'
    } else if (!selectableTypes.includes(getEntityTypeFromHeader(entity))) {
      return 'disabled'
    } else if (selected.has(entity.id)) {
      return 'selected'
    } else {
      return 'default'
    }
  }

  useEffect(() => {
    if (
      queryStatus === 'success' &&
      !queryIsFetching &&
      hasNextPage &&
      fetchNextPage &&
      inView
    ) {
      fetchNextPage()
    }
  }, [queryStatus, queryIsFetching, hasNextPage, fetchNextPage, inView])

  const showInteractiveSortIcon = (columnSortBy: SortBy) => {
    return (
      sort &&
      setSort && (
        <SortIcon
          role="button"
          style={{ height: '20px' }}
          active={sort.sortBy === columnSortBy}
          direction={
            sort.sortBy === columnSortBy ? sort.sortDirection : Direction.DESC
          }
          onClick={() => {
            if (sort.sortBy === columnSortBy) {
              setSort(
                sort.sortBy,
                sort.sortDirection === Direction.ASC
                  ? Direction.DESC
                  : Direction.ASC,
              )
            } else {
              setSort(columnSortBy, Direction.DESC)
            }
          }}
        />
      )
    )
  }

  return (
    <div className="EntityFinderDetailsView">
      <table>
        <thead className={entities.length === 0 ? 'Inactive' : ''}>
          <tr>
            {showSelectColumn && (
              <th
                className="IsSelectedColumn"
                onClick={async () => {
                  // First we must fetch all of the entity children
                  while (hasNextPage && fetchNextPage) {
                    await fetchNextPage()
                  }

                  if (selectAllCheckboxStatus) {
                    // deselect all
                    toggleSelection(
                      entities
                        .filter(e => {
                          const type = getEntityTypeFromHeader(e)
                          return selectableTypes.includes(type)
                        })
                        .map(e => ({ targetId: e.id })),
                    )
                  } else {
                    // select all
                    toggleSelection(
                      entities
                        .filter(e => {
                          // assumption is that we have far more child entities than selected entities
                          const type = getEntityTypeFromHeader(e)
                          return (
                            !selected.has(e.id) &&
                            selectableTypes.includes(type)
                          )
                        })
                        .map(e => ({ targetId: e.id })),
                    )
                  }
                }}
              >
                {enableSelectAll && (
                  <Checkbox
                    label=""
                    className="SRC-pointer-events-none"
                    checked={selectAllCheckboxStatus}
                    onChange={() => {
                      // no-op
                    }}
                  />
                )}
              </th>
            )}
            <th className="EntityIconColumn" />
            <th className="NameColumn">
              <div>
                <span>Name</span>
                <span>{showInteractiveSortIcon(SortBy.NAME)}</span>
              </div>
            </th>
            <th className="AccessColumn"></th>
            <th className="IdColumn">
              <div>ID</div>
            </th>
            {showVersionSelection && (
              <th className="VersionColumn">
                <div>
                  <span>
                    Version
                    <HelpButtonPopover
                      contentMarkdown={
                        'Allows you to choose which version of this item you would like to perform this action on. If you would like the selected reference to update as new versions are created, choose “Always Latest Version”'
                      }
                    />
                  </span>
                </div>
              </th>
            )}
            <th className="CreatedOnColumn">
              <div>
                <span>Created On</span>
                <span>{showInteractiveSortIcon(SortBy.CREATED_ON)}</span>
              </div>
            </th>
            <th className="ModifiedOnColumn">
              <div>
                <span>Modified On</span>
                <span>{showInteractiveSortIcon(SortBy.MODIFIED_ON)}</span>
              </div>
            </th>
            <th className="ModifiedByColumn">
              <div>
                <span>Modified By</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="EntityFinderDetailsView__TableBody">
          {entities?.map(entity => {
            return (
              <SynapseErrorBoundary
                FallbackComponent={TableRowFallbackComponent}
                key={entity.id}
              >
                <DetailsViewRow
                  entityHeader={entity}
                  appearance={determineRowAppearance(entity)}
                  selectedVersion={selected.get(entity.id)}
                  showVersionColumn={showVersionSelection}
                  mustSelectVersionNumber={mustSelectVersionNumber}
                  selectButtonType={selectColumnType}
                  toggleSelection={toggleSelection}
                />
              </SynapseErrorBoundary>
            )
          })}
          {/* To trigger loading the next page */}
          <tr ref={ref} />
        </tbody>
      </table>
      {entities.length === 0 && (
        <div className="EntityFinderDetailsView__Placeholder">
          {queryStatus !== 'loading' &&
            (noResultsPlaceholder || <div>Empty</div>)}
          {queryStatus === 'loading' && <SynapseSpinner size={30} />}
        </div>
      )}
    </div>
  )
}
