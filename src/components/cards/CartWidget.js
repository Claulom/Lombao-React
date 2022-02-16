import React from 'react'
import {useCart} from "../../context/cartContext"


const CartWidget = () => {

    const {cart} =useCart()
    
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
