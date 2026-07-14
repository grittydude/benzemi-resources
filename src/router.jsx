import { useState, useEffect, createContext, useContext } from 'react'

const RouterContext = createContext({ path: '/' })

export function useRouter() {
  return useContext(RouterContext)
}

export function navigate(path) {
  window.history.pushState({}, '', path)
  window.dispatchEvent(new Event('popstate'))
  window.scrollTo({ top: 0, behavior: 'instant' })
}

export function RouterProvider({ children }) {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const handler = () => setPath(window.location.pathname)
    window.addEventListener('popstate', handler)
    return () => window.removeEventListener('popstate', handler)
  }, [])

  return (
    <RouterContext.Provider value={{ path }}>
      {children}
    </RouterContext.Provider>
  )
}
