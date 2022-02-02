import React from 'react'
import './card.css';
import {ItemCount} from "../paginas/ItemCount"; 
import {useState} from 'react'



const ItemDetailProduct = ({productos}) => {
    
const [cantCart, setCantCart] = useState(false)
const handleAddToCart = () =>{
    setCantCart(true)
}

    return (
        <div className="i-detail-product">
            <img src={productos.img} alt={productos.name} className="card-img-style"/>
            <div  className="i-list-detail">
            <p>ID:{productos.id}</p>
            <p>Nombre:{productos.name}</p>
            <p>Precio:{productos.price}</p>
            <p>Stock:{productos.stock}</p> 
            <p>Detalle:{productos.description}</p>
            <ItemCount stock={productos.stock} initial="1" id={productos.id} />
            {!cantCart ? <button onClick={handleAddToCart}>Añadir al carrito</button> : <button >Ir al carrito</button>}
            
            </div>
            </div>
            
        
    )
}
export default ItemDetailProduct

