import filesPlotNavProps from '@/config/synapseConfigs/files'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'

function ExploreFiles() {
  return <QueryWrapperPlotNav {...filesPlotNavProps} />
}

export default ExploreFiles
