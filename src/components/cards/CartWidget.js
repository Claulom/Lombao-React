import React, {useContext}from 'react'
import {CartContext} from "../../context/CartContext"
const CartWidget = () => {

    const {cart} =useContext(CartContext)
    
    let isInCart = 0;

    cart.map((item) =>{
        isInCart = isInCart + item.quantity
    })

    return (
        <div>
            {isInCart}
        </div>
    )
}

export default CartWidget
