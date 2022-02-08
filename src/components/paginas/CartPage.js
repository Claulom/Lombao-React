import React from 'react'
import {useCart} from "../../context/CartContext"

const CartPage = () => {

    const {cart, removeItem, clear} = useCart()

    return (
        <div >
            <h1>Hola</h1>
          
            <button onClick={()=> clear()} className="btn-detail-item">Vaciar carrito</button>
           
            {cart.map((compra)=>{
                return(
            <div key={compra.id} className="carrito-container">
                        <p>{compra.quantity}</p>
                        <p>{compra.name}</p>
                        <p>$ {compra.price}</p>
                        <p><button onClick={()=> removeItem(compra.id)}className="btn-detail-item" >Quitar</button></p>

                </div>
            )})}
        </div>
    )
}

export default CartPage
