import React from 'react'
import './card.css';
import { useNavigate } from 'react-router-dom';

export const ItemCard = ({ productos }) => {
    const navigate = useNavigate();
    return (
        <div className="galeria">
        <div className="container-card-class">
        <div className="itemCard">
            <img  src={productos.img} alt={productos.name}/>
            <p>Nombre:{productos.name}</p>
            <p>Precio:{productos.price}</p>
            <button onClick={() =>navigate(`./ItemDetailProduct.js/${productos.id}`)}>Ver detalle</button>
        </div>
        </div>
        </div>
    );
};



