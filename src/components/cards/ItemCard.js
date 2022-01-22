import React from 'react'
import {ItemCount} from "../paginas/ItemCount";
import './card.css';


export const ItemCard = ({ articulo }) => {
    return (
        <div className="galeria">
        <div clasName="container-card-class">
        <div className="itemCard">
            <img src={articulo.img} alt={articulo.name}/>
            <p>ID:{articulo.id}</p>
            <p>Nombre:{articulo.name}</p>
            <p>Precio:{articulo.price}</p>
            <p>Stock: {articulo.stock}</p>
            <button>Mostrar detalle de producto</button>
            <ItemCount stock={articulo.stock} initial="1"/>
        </div>
        </div>
        </div>
    );
};



