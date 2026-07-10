import { RouterProvider, useRouter } from './router'
import Home from './pages/Home'
import Resources from './pages/Resources'
import ResourceArticle from './pages/ResourceArticle'
import Contact from './pages/Contact'
import Training from './pages/Training'
import IndustrySolutions from './pages/IndustrySolutions'
import About from './pages/About'

function Routes() {
  const { path } = useRouter()
  if (path.startsWith('/resources/')) return <ResourceArticle />
  if (path === '/resources') return <Resources />
  if (path === '/contact') return <Contact />
  if (path === '/training') return <Training />
  if (path === '/industry-solutions') return <IndustrySolutions />
  if (path === '/about') return <About />
  return <Home />
}

function App() {
  return (
    <RouterProvider>
      <Routes />
    </RouterProvider>
  )
}

export default App
