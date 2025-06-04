import datasets from '@/config/synapseConfigs/datasets'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'

const ExploreDatasets = () => {
  return <QueryWrapperPlotNav {...datasets} />
}

export default ExploreDatasets
