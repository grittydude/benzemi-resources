import { useRouter } from '../router'
import { TRAINING_DETAIL, CONTACT_PAGE } from '../constants'
import RootLayout from '../layouts/RootLayout'
import TrainingDetailBody from '../components/sections/TrainingDetailBody'
import ContactFormSection from '../components/sections/ContactFormSection'
import SiteFooter from '../components/sections/SiteFooter'

function TrainingDetail() {
  const { path } = useRouter()
  const slug = path.replace('/training/', '')
  const programme = TRAINING_DETAIL[slug] ?? TRAINING_DETAIL['oil-gas-fundamentals']
  const enrolmentConfig = CONTACT_PAGE.enquiryTypes.find((t) => t.id === 'enrolment')

  return (
    <RootLayout>
      <main>
        <TrainingDetailBody programme={programme} />
        <ContactFormSection
          enquiryType="enrolment"
          contactInfo={CONTACT_PAGE.contact}
          enquiryConfig={enrolmentConfig}
        />
      </main>
      <SiteFooter />
    </RootLayout>
  )
}

export default TrainingDetail
