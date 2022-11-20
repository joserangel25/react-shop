import React, { useEffect, useState } from 'react'
import { useGetProducts } from '../hooks/useGetProducts'
import Product from '../components/Product'
import '../styles/ListadoProductos.scss'

const API = 'https://api.escuelajs.co/api/v1/products?limit=20&offset=2'

export default function ListadoProductos({setShowDetailProduct}) {
  const { loading, productos } = useGetProducts(API)
    
  return (
    <section className="main-container">
      <div className="cards-container">
      {
        loading ? 
          <p>Cargando....</p>
          :
          productos.map(product => (
            <Product key={product.id} producto={product} setShowDetailProduct={setShowDetailProduct} />
          ))
      }

        
      </div>
  </section>
  )
}
