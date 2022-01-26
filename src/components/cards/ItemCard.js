import React from 'react'
import { useNavigate } from 'react-router-dom';
import './card.css';


export const ItemCard = ({ articulo }) => {
    const navigate = useNavigate();
    return (
        <div className="galeria">
        <div clasName="container-card-class">
        <div className="itemCard">
            <img src={articulo.img} alt={articulo.name}/>
            <p>Nombre:{articulo.name}</p>
            <p>Precio:{articulo.price}</p>
            <button onClick={()=>navigate(`/productos/${productos.id}`)}>Ver detalle</button>
        </div>
        </div>
        </div>
    );
};



