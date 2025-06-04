import hackathons from '@/config/synapseConfigs/hackathons'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'

function ExploreHackathons() {
  return <QueryWrapperPlotNav {...hackathons} />
}

export default ExploreHackathons
