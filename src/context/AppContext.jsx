import React, { createContext, useState } from 'react'

const generarId = () => {
  const random = Math.random().toString(36).substring(2);
  const fecha  = Date.now().toString(36);
  return random + fecha;
}

export const AppContext = createContext(null);

export const AppContextProvider = ({children}) => {
  
  //Listado de todos los productos del home
  const [ carrito, setCarrito ] = useState([]);
  //Seccion para agregar un producto y mostrar los detalles en un aside
  const [ detailProduct, setDetailProduct ] = useState({});

  const [ showOrderCar, setShowOrderCar ] = useState(false)
  const [ showDetailProduct, setShowDetailProduct ] = useState(false)


  const addToCar = (producto)  => {
    if(carrito.find(item => item.id === producto.id)){
      alert('Ya existe este elemento')
      return
    }
    // producto.dateAdd = generarId()
    // console.log(producto)
    setCarrito([...carrito, producto])
  }

  const deleteProductoOfCar = (id) => {
    const newProductos = carrito.filter(product => product.id !== id);
    setCarrito(newProductos)
  }

  const value = {
    carrito,
    addToCar,
    detailProduct,
    setDetailProduct,
    showOrderCar,
    setShowOrderCar,
    showDetailProduct,
    setShowDetailProduct,
    deleteProductoOfCar
  }
  return <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>
}

