import React from 'react'
import './card.css';


export const ItemCard = ({ articulo }) => {
    return (
        <div className="itemCard">
            <p>Imagen:</p>
            <p>ID:{articulo.id}</p>
            <p>Nombre:{articulo.nombre}</p>
            <p>Precio:{articulo.precio}</p>
            <p>Stock: {articulo.cantidad}</p>
            <button>Mostrar detalle de producto</button>
        </div>


    );
};



