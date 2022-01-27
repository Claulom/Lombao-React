import React from 'react'
import './card.css';
import { useNavigate } from 'react-router-dom';

export const ItemCard = ({ articulos }) => {
    let navigate = useNavigate();

    const detail = ()=>{
        navigate(`/detail/${articulos.id}`)
    } 
    return (
        <div className="galeria">
        <div className="container-card-class">
        <div className="itemCard">
            <img  src={articulos.img} alt={articulos.name}/>
            <p>Nombre:{articulos.name}</p>
            <p>Precio:{articulos.price}</p>
            <button onClick={detail}>Ver detalle</button>
        </div>
        </div>
        </div>
    );
};



