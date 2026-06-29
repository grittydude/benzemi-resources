import Navbar from '../components/sections/Navbar'

function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      {/* <Footer /> will go here */}
    </>
  )
}

export default RootLayout