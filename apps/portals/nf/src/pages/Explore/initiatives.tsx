import initiatives from '@/config/synapseConfigs/initiatives'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'

function ExploreInitiatives() {
  return <QueryWrapperPlotNav {...initiatives} />
}

export default ExploreInitiatives
