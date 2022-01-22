import React from 'react'
import {ItemCount} from "../paginas/ItemCount";
import './card.css';


export const ItemCard = ({ articulo }) => {
    return (
        <div className="itemCard">
            <p>Imagen:</p>
            <p>ID:{articulo.id}</p>
            <p>Nombre:{articulo.name}</p>
            <p>Precio:{articulo.price}</p>
            <p>Stock: {articulo.stock}</p>
            <button>Mostrar detalle de producto</button>
            <ItemCount stock={articulo.stock} initial="1"/>
        </div>


    );
};



