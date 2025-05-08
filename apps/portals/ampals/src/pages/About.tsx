import { MarkdownSynapse } from 'synapse-react-client/components/Markdown/MarkdownSynapse'
import { SectionLayout } from '@sage-bionetworks/synapse-portal-framework/components/SectionLayout'

function About() {
  return (
    <SectionLayout title={'About'} ContainerProps={{ className: 'AboutPage' }}>
      <MarkdownSynapse ownerId={'syn22130826'} loadingSkeletonRowCount={20} />
    </SectionLayout>
  )
}

export default About
