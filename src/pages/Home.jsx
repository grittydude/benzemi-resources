import RootLayout from '../layouts/RootLayout'
import Hero from '../components/sections/Hero'
import IndustryGap from '../components/sections/IndustryGap'
import WhatWeDo from '../components/sections/WhatWeDo'
import WhyBezimeni from '../components/sections/WhyBezimeni'
import FeaturedProgrammes from '../components/sections/FeaturedProgrammes'
import Testimonials from '../components/sections/Testimonials'
import IndustryResources from '../components/sections/IndustryResources'
import GrowingCTA from '../components/sections/GrowingCTA'
import SiteFooter from '../components/sections/SiteFooter'

function Home() {
  return (
    <RootLayout>
      <main>
        <Hero />
        <IndustryGap />
        <WhatWeDo />
        <WhyBezimeni />
        <FeaturedProgrammes />
        <Testimonials />
        <IndustryResources />
        <GrowingCTA />
      </main>
      <SiteFooter />
    </RootLayout>
  )
}

export default Home
