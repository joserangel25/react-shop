import React from 'react'
import '@styles/Footer.scss'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className='footer'>
      Todos los derechos reservados - { year }
    </footer>
  )
}
