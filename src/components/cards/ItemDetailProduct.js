import React from 'react'
import './card.css';
import {ItemCount} from "../paginas/ItemCount"; 



const ItemDetailProduct = ({productos}) => {
    


    return (
        <div className="i-detail-product">
            <img src={productos.img} alt={productos.name} className="card-img-style"/>
            <div  className="i-list-detail">
            <p>ID:{productos.id}</p>
            <p>Nombre:{productos.name}</p>
            <p>Precio:{productos.price}</p>
            <p>Stock:{productos.stock}</p> 
            <p>Detalle:{productos.description}</p>
             
            {productos.stock ? <ItemCount stock={productos.stock} initial="1" id={productos.id} /> : <button onClick="{<carrito/>}">Finalizar compra</button>}
            
            </div>
            </div>
            
        
    )
}
export default ItemDetailProduct

