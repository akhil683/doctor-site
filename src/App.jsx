import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
  <>
  <ScrollToTop />
  <Navbar />
    <main>
      <Outlet />
    </main>
   <Footer />
  </> 
  )
}

export default App
