import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../components/Product'
import Spinner from '../components/Spinner'
import { useAppContext } from '../hooks/useAppContext'
import '../styles/ListadoProductos.scss'

// const API = 'https://api.escuelajs.co/api/v1/products?limit=20&offset=2'
// const API = 'https://api.escuelajs.co/api/v1/categories/${id}/products?limit=20&offset=2'


export default function ListadoProductos({setShowDetailProduct}) {
  
  const { setShowMenuMobile } = useAppContext();
  const { categoria } = useParams()
  const [ , idCategoria] = categoria.split('-');


  const [ loading, setLoading ] = useState(false)
  const [ productos, setProductos ] = useState([])

  const getProducts2 = useCallback((async () => {
    setLoading(true)
    let api = '';

    if(idCategoria != '0'){
      api = `https://api.escuelajs.co/api/v1/categories/${idCategoria}/products`
    } else {
      api = 'https://api.escuelajs.co/api/v1/products?limit=100&offset=5'
    }
    setShowMenuMobile(false)

    try {
      const res = await fetch(api);
      const datos = await res.json();
      setProductos(datos)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }), [idCategoria])

  useEffect(() => {
   
    getProducts2()
     
  }, [idCategoria])
  
    
  return (
    <section className="main-container">

        {
          loading ? (
            <div className='content-blank'>
              <Spinner />
            </div>
            )
          :
            <div className="cards-container">
              {
                (!loading && productos.length > 0) 
                  &&
                  productos.map(product => (
                    <Product key={product.id} producto={product} setShowDetailProduct={setShowDetailProduct} />
                  ))
              }
            </div>
        }
  </section>
  )
}
