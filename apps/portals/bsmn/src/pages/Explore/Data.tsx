import { studiesQueryWrapperPlotNavProps } from '@/config/synapseConfigs/studies'
import { QueryWrapperPlotNav } from 'synapse-react-client/components/QueryWrapperPlotNav'

function ExploreData() {
  return <QueryWrapperPlotNav {...studiesQueryWrapperPlotNavProps} />
}

export default ExploreData
