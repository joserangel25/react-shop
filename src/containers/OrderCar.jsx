import React from 'react'
import ProductCar from '../components/ProductCar'
import '../styles/OrderCar.scss'
import iconFlecha from '@icons/flechita.svg'
import { useAppContext } from '../hooks/useAppContext'

export default function OrderCar() {
  const { carrito, setShowOrderCar } = useAppContext();

  const calcularTotal = () => {
    const total = carrito.reduce((val, nuevoItem) => val + nuevoItem.price, 0)
    return total
  }

  return (
    <section className="shopping-cart">
    <div className="shopping-cart-container">
      <div className="title-container">
        <img src={iconFlecha} alt="arrow" onClick={() => setShowOrderCar(false)} />
        <h1 className="tittle">Shopping Cart</h1>
      </div>

      {/* <div> */}
      {
        carrito.map(producto => (
          <ProductCar key={producto.id} producto={producto} />
        ))
      }
      {/* </div> */}


      {
        carrito.length ?
        (
          <div className="total-container">
            <div className="total-information ">
              <p>Total a Pagar</p>
              <p>$ {calcularTotal()}</p>
            </div>
            <button type="button" name="button" className="primary-button-order">Checkout</button>
          </div>
        )
        :
        (
          <div className="total-container">
            <div className="total-information">
              <p style={{ justifySelf: 'center'}}>Agrega productos</p>
            </div>
          </div>
        )
      }

    </div>
</section>
  )
}

