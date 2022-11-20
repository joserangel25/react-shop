import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='login'>
      Ruta no encontrada ☹
      <Link to='/'>Volver al Home</Link>
    </div>
  )
}

export default NotFound