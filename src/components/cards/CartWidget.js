import React from 'react'
import {useCart} from "../../context/cartContext"


const CartWidget = () => {

    const {cart} = useCart()
    let isInCart = 0;
   
    cart.forEach((item) =>{
        isInCart = isInCart + item.quantity
    })

   
    
    return (
        <div>
            {(!isInCart ? null : isInCart)}
            
        </div>
    )
}

export default CartWidget
