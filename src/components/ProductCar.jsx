import React from 'react'
import iconXClose from '@icons/icon_close.png'
import { useAppContext } from '../hooks/useAppContext';

export default function ProductCar({producto}) {
  const { images, price, title, id } = producto;
  const { deleteProductoOfCar } = useAppContext();

  return (
    <div className="shopping-cart-cards">
      <img src={images[0]} alt={`imagen ddel producto ${title}`} className="picture" />
      <p>{title}</p>
      <p>${price}</p>
      <img src={iconXClose} alt="icon close" onClick={() => deleteProductoOfCar(id)} />
    </div>
  )
}