import React from 'react'
import './card.css';


export const ItemCard = ({ articulo }) => {
    return (
        <div className="galeria">
        <div clasName="container-card-class">
        <div className="itemCard">
            <img src={articulo.img} alt={articulo.name}/>
            <p>Nombre:{articulo.name}</p>
            <p>Precio:{articulo.price}</p>
            <button onClick="{/ItemDetailProduct}">Ver detalle</button>
        </div>
        </div>
        </div>
    );
};



