import React from 'react'
import Header from '../components/Header'

const Layout = ({children}) => {
  return (
    <div>
      <Header />
      {children}
      <footer>Todos los derechos reservados</footer>
    </div>
  )
}

export default Layout