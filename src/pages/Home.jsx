import React, { useEffect } from 'react'
import { useLocation, Outlet, useNavigate } from 'react-router-dom'
import AsideDetailProduct from '../containers/AsideDetailProduct'
import MenuMobile from '../containers/MenuMobile'
import OrderCar from '../containers/OrderCar'
import { useAppContext } from '../hooks/useAppContext'

const Home = () => {

  const {  showOrderCar, showDetailProduct, showMenuMobile } = useAppContext()
  const { pathname } = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    if( pathname == '/' ){
      navigate('all-0')
    }
  }, [pathname])
  
  return (
    <div >
      
      

      <div style={{ position: 'relative' }}>

        <Outlet />

        {
          showOrderCar && <OrderCar />
        }
        {
          showDetailProduct && <AsideDetailProduct />
        }

      </div>
      
      {
        showMenuMobile && <MenuMobile />
      }
      
    </div>
  )
}

export default Home