import tools from '@/config/synapseConfigs/tools'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'

function ExploreTools() {
  return <QueryWrapperPlotNav {...tools} />
}

export default ExploreTools
