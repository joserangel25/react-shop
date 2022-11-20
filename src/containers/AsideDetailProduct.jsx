import React from 'react'
import iconClose from '@icons/icon_close.png'
import iconAddToCar from '@icons/bt_add_to_cart.svg'
import '../styles/AsideDetailProduct.scss'
import { useAppContext } from '../hooks/useAppContext'

export default function AsideDetailProduct({}) {
  const { addToCar, detailProduct, setDetailProduct, setShowDetailProduct } = useAppContext();
  const { title, price, images, description } = detailProduct;

  const closeAsideCar = () => {
    setDetailProduct({})
    setShowDetailProduct(false)
  }

  return (
    <aside className="product-detail">
    <div className="product-detail-close" onClick={closeAsideCar}>
      <img 
        src={iconClose} 
        alt="close icon"         
      />
    </div>
    <img src={images[0]} alt={`Imagen del producto ${title}`}/>
    <div className="product-info-real">
      <p>${price}</p>
      <p>{title}</p>
      <p>{description}</p>
    <button 
      className="primary-button-aside add-to-cart-button btn-grid"
      onClick={() => addToCar(detailProduct)}
    >
      <img src={iconAddToCar} alt="icon add to cart" />
      Add to cart
    </button>
    </div>


  </aside>
  )
}
