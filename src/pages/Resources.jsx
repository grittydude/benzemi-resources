import RootLayout from '../layouts/RootLayout'
import ResourcesHero from '../components/sections/ResourcesHero'
import FeaturedArticles from '../components/sections/FeaturedArticles'
import ResourcesGrid from '../components/sections/ResourcesGrid'
import UpcomingEvents from '../components/sections/UpcomingEvents'
import NewsletterCTA from '../components/sections/NewsletterCTA'
import Testimonials from '../components/sections/Testimonials'
import SiteFooter from '../components/sections/SiteFooter'

function Resources() {
  return (
    <RootLayout>
      <main>
        <ResourcesHero />
        <FeaturedArticles />
        <ResourcesGrid />
        <UpcomingEvents />
        <NewsletterCTA />
        <Testimonials />
      </main>
      <SiteFooter />
    </RootLayout>
  )
}

export default Resources
