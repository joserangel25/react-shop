import React, { useState } from 'react'
import Header from '../components/Header'
import AsideDetailProduct from '../containers/AsideDetailProduct'
import ListadoProductos from '../containers/ListadoProductos'
import OrderCar from '../containers/OrderCar'
import { useAppContext } from '../hooks/useAppContext'

const Home = () => {

  const { showOrderCar, showDetailProduct } = useAppContext()

  return (
    <div>
      <Header />

      <div style={{ position: 'relative' }}>

        <ListadoProductos 
          
        /> 

        {
          showOrderCar && <OrderCar />
        }
        {
          showDetailProduct && <AsideDetailProduct />
        }

      </div>
    </div>
  )
}

export default Home