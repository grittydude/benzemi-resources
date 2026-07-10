import { TRAINING_PAGE } from '../constants'
import RootLayout from '../layouts/RootLayout'
import PageHero from '../components/ui/PageHero'
import ProgrammeCards from '../components/sections/ProgrammeCards'
import LearningExperience from '../components/sections/LearningExperience'
import FAQAccordion from '../components/ui/FAQAccordion'
import SiteFooter from '../components/sections/SiteFooter'

function Training() {
  const { hero, programmes, learningExperience, faq } = TRAINING_PAGE

  return (
    <RootLayout>
      <PageHero tags={hero.tags} heading={hero.heading} />
      <ProgrammeCards programmes={programmes} />
      <LearningExperience data={learningExperience} />

      <FAQAccordion items={faq} />

      <SiteFooter />
    </RootLayout>
  )
}

export default Training
