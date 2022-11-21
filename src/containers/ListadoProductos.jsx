import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetProducts } from '../hooks/useGetProducts'
import Product from '../components/Product'
import '../styles/ListadoProductos.scss'

// const API = 'https://api.escuelajs.co/api/v1/products?limit=20&offset=2'
// const API = 'https://api.escuelajs.co/api/v1/categories/${id}/products?limit=20&offset=2'


export default function ListadoProductos({setShowDetailProduct}) {
  
  const { categoria } = useParams()
  // console.log(categoria)
  const [ , idCategoria] = categoria.split('-');


  const [ loading, setLoading ] = useState(false)
  const [ productos, setProductos ] = useState([])

  useEffect(() => {

    const getProducts = async () => {
      setLoading(true)
      let api = '';

      if(idCategoria != '0'){
        api = `https://api.escuelajs.co/api/v1/categories/${idCategoria}/products`
      } else {
        api = 'https://api.escuelajs.co/api/v1/products?limit=100&offset=5'
      }

      try {
        const res = await fetch(api);
        const datos = await res.json();
        // console.log(datos)
        setProductos(datos)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }

    getProducts()
  
    
  }, [idCategoria])
  
    
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
