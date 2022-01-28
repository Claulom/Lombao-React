import React from 'react'
import './card.css';
import {ItemCount} from "../paginas/ItemCount";


const ItemDetailProduct = ({productos}) => {
   
console.log(productos)
    return (
        <div className="i-detail-product">
            <img src={productos.img} alt={productos.name} className="card-img-style"/>
            <div  className="i-list-detail">
            <p>ID:{productos.id}</p>
            <p>Nombre:{productos.name}</p>
            <p>Precio:{productos.price}</p>
            <p>Stock:{productos.stock}</p>
            <p>Detalle:{productos.description}</p>
            </div>
            <ItemCount stock={productos.stock} initial="1" />
            
        </div>
    )
}
export default ItemDetailProduct

