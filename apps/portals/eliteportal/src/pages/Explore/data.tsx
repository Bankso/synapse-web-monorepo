import { filesViewQueryWrapperPlotNavProps } from '@/config/synapseConfigs/cohortbuilder'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'

function exploreData() {
  return <QueryWrapperPlotNav {...filesViewQueryWrapperPlotNavProps} />
}

export default exploreData
