import React from 'react'
import iconCar from '@icons/bt_add_to_cart.svg'
import { useAppContext } from '../hooks/useAppContext';

export default function Product({producto}) {
  const { title, price, images } = producto;
  const { addToCar, setShowOrderCar, showOrderCar, setDetailProduct, setShowDetailProduct } = useAppContext();

  const handleAddToCar = () => {
    addToCar(producto)
  }

  const openAsideDetail = () => {
    setShowDetailProduct(true)
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    setDetailProduct(producto)
    if(showOrderCar) setShowOrderCar(false)
  }
  return (
    <div className="product-card">
      <img 
        src={images[0]} alt={`Imagen del producto ${title}`} 
        onClick={openAsideDetail}
      />
      <div className="product-info">
        <div>
          <p>${price}</p>
          <p>{title}</p>
        </div>
        <figure>
          <img src={iconCar} alt="imagen del icono car" onClick={handleAddToCar} />
        </figure>
      </div>
    </div>
  )
}
