import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import '@styles/Header.scss'

import MenuProfile from './MenuProfile'
import iconMenu from '@icons/icon_menu.svg'
import logoYard from '@logos/logo_yard_sale.svg'
import iconShoppingCart from '../assets/icons/icon_shopping_cart.svg'
import { useAppContext } from '../hooks/useAppContext'

const active = {
  border: '1px solid var(--hospital-green)',
  color: 'var(--hospital-green)'
}

const Header = () => {

  const [ showMuneProfile, setShowMenuProfile ] = useState(false)
  const { carrito, setShowOrderCar, showOrderCar, showDetailProduct, setShowDetailProduct } = useAppContext();

  const handleOpenOrderCar = () => {
    setShowOrderCar(!showOrderCar)
    if(showDetailProduct){
      setShowDetailProduct(false)
    }
  }

  return (
    <>
    <nav>
    <img src={iconMenu} alt="menu" className="menu" />

    <div className="navbar-left">
      <Link to='/' style={{ alignSelf: 'center'}}>
        <img src={logoYard} alt="logo" className="nav-logo" />
      </Link>

      <ul>
        <li>
          <NavLink
            to={`all-0`}
            // className={({isActive}) => isActive ? 'active' : undefined}
            style={ ({isActive}) => isActive ? active : undefined }
            
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`clothes-1`}
            style={ ({isActive}) => isActive ? active : undefined }
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`electronics-2`}
            style={ ({isActive}) => isActive ? active : undefined }
          >
            Electronics
          </NavLink>
          {/* <Link to={`electronics-2`}>Electronics</Link> */}
        </li>
        <li>
          <NavLink
            to={`furnitures-3`}
            style={ ({isActive}) => isActive ? active : undefined }
          >
            Furnitures
          </NavLink>
          {/* <Link to={`furnitures-3`}>Furnitures</Link> */}
        </li>
        <li>
          <NavLink
            to={`shoes-4`}
            style={ ({isActive}) => isActive ? active : undefined }
          >
            Shoes
          </NavLink>
          {/* <Link to={`shoes-4`}>Shoes</Link> */}
        </li>
        <li>
          <NavLink
            to={`others-5`}
            style={ ({isActive}) => isActive ? active : undefined }
          >
            Others
          </NavLink>
          {/* <Link to={`others-5`}>Others</Link> */}
        </li>
      </ul>
      
    </div>

    <div className="navbar-right">
      <ul>
        <li 
          className="navbar-email"
          onClick={() => setShowMenuProfile(!showMuneProfile)}
        >platzi@example.com</li>
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