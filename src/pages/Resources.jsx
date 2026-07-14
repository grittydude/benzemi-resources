import RootLayout from '../layouts/RootLayout'
import ResourcesHero from '../components/sections/ResourcesHero'
import IndustryFeaturedCards from '../components/sections/IndustryFeaturedCards'
import ResourcesGrid from '../components/sections/ResourcesGrid'
import IndustryEvents from '../components/sections/IndustryEvents'
import NewsletterCTA from '../components/sections/NewsletterCTA'
import Testimonials from '../components/sections/Testimonials'
import SiteFooter from '../components/sections/SiteFooter'

function Resources() {
  return (
    <RootLayout>
      <main>
        <ResourcesHero />
        <IndustryFeaturedCards />
        <ResourcesGrid />
        <IndustryEvents />
        <NewsletterCTA />
        <Testimonials />
      </main>
      <SiteFooter />
    </RootLayout>
  )
}

export default Resources
