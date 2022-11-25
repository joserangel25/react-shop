import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import '@styles/Header.scss'

import MenuProfile from './MenuProfile'
import iconMenu from '@icons/icon_menu.svg'
import logoYard from '@logos/logo_yard_sale.svg'
import iconShoppingCart from '../assets/icons/icon_shopping_cart.svg'
import { useAppContext } from '../hooks/useAppContext'
import { listMenu, objectIsValid } from '../constants'
import { useAuthContext } from '../hooks/useAuthContext'

const active = {
  border: '1px solid var(--hospital-green)',
  color: 'var(--hospital-green)'
}

const Header = () => {

  const [ showMuneProfile, setShowMenuProfile ] = useState(false)
  const { carrito, 
          setShowOrderCar, 
          showOrderCar, 
          showDetailProduct, 
          setShowDetailProduct,
          setShowMenuMobile } = useAppContext();
  
  const { usser } = useAuthContext();
  // console.log(usser)
 
  const handleOpenOrderCar = () => {
    setShowOrderCar(!showOrderCar)
    if(showDetailProduct){
      setShowDetailProduct(false)
    }
  }

  const modifierUrl = (name, ind) => `${name.toLowerCase()}-${ind}`

  return (
    <>
    <nav>
    <img 
      src={iconMenu} 
      alt="menu" 
      className="menu"
      onClick={() => setShowMenuMobile(prevState => !prevState)}
    />

    <div className="navbar-left">
      <Link to='/' style={{ alignSelf: 'center'}}>
        <img src={logoYard} alt="logo" className="nav-logo" />
      </Link>

      <ul>
        {
          listMenu.map((item, ind) => (
            <li key={ind}>
              <NavLink
                to={modifierUrl(item.name, ind)}
                style={ ({isActive}) => isActive ? active : undefined }
              >
                {item.name}
              </NavLink>
            </li>
          ))
        }
        
      </ul>
      
    </div>

    <div className="navbar-right">
      <ul>
        {
          objectIsValid(usser)?
          (
            <li 
                className="navbar-email"
                onClick={() => setShowMenuProfile(!showMuneProfile)}
            >
              {usser.email}
            </li>
          )
          :
          <li><Link to='/login' className="navbar-email">Inicia sesión</Link></li>
        }
        <li className="navbar-shopping-cart" onClick={handleOpenOrderCar}>
          <img src={iconShoppingCart} alt="shopping cart" />
          <div>{carrito.length}</div>
        </li>
      </ul>
    </div>
  </nav>
  {
    showMuneProfile && <MenuProfile />
  }
  
  </>
  )
}

export default Header