import { INDUSTRY_SOLUTIONS_PAGE } from '../constants'
import industryBg from '../assets/images/industry_bg.jpg'
import RootLayout from '../layouts/RootLayout'
import PageHero from '../components/ui/PageHero'
import ThreePillarSection from '../components/sections/ThreePillarSection'
import IndustrySectors from '../components/sections/IndustrySectors'
import PartnerCTA from '../components/sections/PartnerCTA'
import DarkCTAStrip from '../components/sections/DarkCTAStrip'
import SiteFooter from '../components/sections/SiteFooter'

function IndustrySolutions() {
  const { hero, approach, solutionAreas, sectors, partnerCta, darkStrip } = INDUSTRY_SOLUTIONS_PAGE

  return (
    <RootLayout>
      <PageHero
        tags={hero.tags}
        heading={hero.heading}
        cta={hero.cta}
        imageSrc={industryBg}
      />

      <ThreePillarSection
        badge={approach.badge}
        heading={approach.heading}
        description={approach.description}
        pillars={approach.pillars}
        columns={3}
        fullWidth
        bgColor="var(--color-badge-bg)"
        id="approach"
      />

      <ThreePillarSection
        badge={solutionAreas.badge}
        heading={solutionAreas.heading}
        description={solutionAreas.description}
        pillars={solutionAreas.areas}
        columns={2}
        fullWidth
        stackedHeader
        bgColor="#ffffff"
        id="solution-areas"
      />

      <IndustrySectors data={sectors} />

      <PartnerCTA data={partnerCta} />

      <DarkCTAStrip data={darkStrip} />

      <SiteFooter />
    </RootLayout>
  )
}

export default IndustrySolutions
