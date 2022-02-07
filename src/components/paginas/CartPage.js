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
            <div key={compra.item.id} className='carrito-container'>
                    <p>
                        {compra.item.name}
                        </p>
                        <p>
                        {compra.quantity}
                        </p>
                        $ {compra.item.price}
                        <p>
                        <button onClick={()=> removeItem(compra.item.id)}className="btn-detail-item" >Quitar</button>
                    </p>

                </div>
            )})}
        </div>
    )
}

export default CartPage
