import RootLayout from '../layouts/RootLayout'
import Hero from '../components/sections/Hero'
import IndustryGap from '../components/sections/IndustryGap'

function Home() {
  return (
    <RootLayout>
      <main>
        <Hero />
        <IndustryGap />
      </main>
    </RootLayout>
  )
}

export default Home