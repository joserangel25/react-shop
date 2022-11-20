import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import '@styles/Header.scss'

import MenuProfile from './MenuProfile'
import iconMenu from '@icons/icon_menu.svg'
import logoYard from '@logos/logo_yard_sale.svg'
import iconShoppingCart from '../assets/icons/icon_shopping_cart.svg'
import { useAppContext } from '../hooks/useAppContext'

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
      <img src={logoYard} alt="logo" className="nav-logo" />

      <ul>
        <li>
          <Link to="/">All</Link>
        </li>
        <li>
          <Link to="/clothes">Clothes</Link>
        </li>
        <li>
          <Link to="/electronics">Electronics</Link>
        </li>
        <li>
          <Link to="/furnitures">Furnitures</Link>
        </li>
        <li>
          <Link to="/shoes">Shoes</Link>
        </li>
        <li>
          <Link to="/others">Others</Link>
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