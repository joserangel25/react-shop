import { useEffect, useState } from 'react'

export const useGetProducts = (API) => {
  const [ productos, setProductos ] = useState([]);
  const [ loading, setLoading ] =  useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true)
      try {
        const res = await fetch(API);
        const datos = await res.json();
        console.log(datos)
        setProductos(datos)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }

    getProducts()
  }, [])

  return {
    productos,
    loading
  }
}