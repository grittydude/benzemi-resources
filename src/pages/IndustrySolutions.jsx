import { INDUSTRY_SOLUTIONS_PAGE } from '../constants'
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
        imageSrc={hero.image}
      />

      <ThreePillarSection
        badge={approach.badge}
        heading={approach.heading}
        description={approach.description}
        pillars={approach.pillars}
        id="approach"
      />

      <ThreePillarSection
        badge={solutionAreas.badge}
        heading={solutionAreas.heading}
        description={solutionAreas.description}
        pillars={solutionAreas.areas}
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
