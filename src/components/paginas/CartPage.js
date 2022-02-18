import React from 'react'
import {useCart} from "../../context/cartContext"
import {Fragment} from 'react'
import { useNavigate } from 'react-router-dom';


const CartPage = () => {
    const {cart,clear,removeItem, totalCompra} = useCart()
    let navigate = useNavigate();
    
    const Productos = ()=>{
        navigate(`/Productos/`)
    } 
    const Fin = ()=>{
        navigate(`/fin/`)
    }
     
    if(cart.length === 0){
        return(
            <div>
            <h2>Tu carrito de compras esta vacío</h2>
            <button onClick={Productos} className="btn-detail-item">Ir a productos</button>
            </div>
        )
    }
    else
     return (    
        <div>
            <h1>Estas a un paso de obtener todo lo que querés</h1>
            {cart.map(compra=>
                    <Fragment key={compra.id} >
                        <h3 className="carrito-container">
                        <p>{compra.quantity}</p>
                        <p>{compra.name}</p>
                        <p>$ {compra.price}</p>
                        <p>Subtotal: $ {compra.price * compra.quantity}</p>
                        <p><button onClick={()=> removeItem(compra.id)}className="btn-detail-item" >Quitar</button></p>
                        </h3>
                      
                    </Fragment>
            )}
            <p className="carrito-container-total">Total: $ {totalCompra()}</p>
            <button onClick={()=> clear()} className="btn-detail-item">Vaciar carrito</button>
            <button onClick={Fin} className="btn-detail-item">Finalizar compra</button>
            </div>
    )
}

export default CartPage
