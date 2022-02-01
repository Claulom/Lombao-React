import React from 'react'
import { cartContext } from '../../context/cartContext';
import {useContext} from "react"

const Inicio = () => {
    
     const [] = useContext(cartContext);
    
    return (
        <div>
            <h1>Bienvenidos a CoolStore</h1>
            <p>[]</p>
        </div>
    )
}

export default Inicio
