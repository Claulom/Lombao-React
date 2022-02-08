import React from 'react'
import './card.css';
import { useNavigate } from 'react-router-dom';
import {useCart} from "../../context/CartContext"
export const ItemCard = ({ productos }) => {
    let navigate = useNavigate();
   
    const detail = ()=>{
        navigate(`/detail/${productos.id}`)
    } 
    return (
        <div className="galeria">
        <div className="container-card-class">
        <div className="itemCard">
            <img  src={productos.img} alt={productos.name} className="card-img-style-i"/>
            <p>Nombre:{productos.name}</p>
            <p>Precio:{productos.price}</p>
            <button onClick={detail} className="btn-detail-item">Ver detalle</button>
         
        </div>
        </div>
        </div>
    );
};



