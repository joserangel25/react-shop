import React from 'react'
import { useLocation } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Layout = ({children}) => {
  const { pathname } = useLocation();
  // console.log(location)
  return (
    <div>
      {
       (pathname !== '/login') && <Header />
      }

      {children}
      
      <Footer />
    </div>
  )
}

export default Layout