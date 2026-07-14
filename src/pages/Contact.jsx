import { useState } from 'react'
import { CONTACT_PAGE } from '../constants'
import RootLayout from '../layouts/RootLayout'
import PageHero from '../components/ui/PageHero'
import EnquirySelector from '../components/sections/EnquirySelector'
import ContactFormSection from '../components/sections/ContactFormSection'
import FAQAccordion from '../components/ui/FAQAccordion'
import SiteFooter from '../components/sections/SiteFooter'

function Contact() {
  const { hero, contact, enquiryHeading, enquiryTypes, faq } = CONTACT_PAGE
  const [activeEnquiry, setActiveEnquiry] = useState(enquiryTypes[0].id)

  const activeConfig = enquiryTypes.find(e => e.id === activeEnquiry) || enquiryTypes[0]

  return (
    <RootLayout>
      <PageHero
        tags={hero.tags}
        heading={hero.heading}
      />

      <EnquirySelector
        heading={enquiryHeading}
        enquiryTypes={enquiryTypes}
        active={activeEnquiry}
        onSelect={setActiveEnquiry}
      />

      <ContactFormSection
        enquiryType={activeEnquiry}
        contactInfo={contact}
        enquiryConfig={activeConfig}
      />

      <FAQAccordion items={faq} />

      <SiteFooter />
    </RootLayout>
  )
}

export default Contact
