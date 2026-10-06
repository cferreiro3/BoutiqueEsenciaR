import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import FloatingButtons from './FloatingButtons'

function Layout() {
  return (
    <>
      <Navbar />

      <Outlet />

      <Footer />

      <FloatingButtons />
    </>
  )
}

export default Layout