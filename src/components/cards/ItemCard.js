import React from 'react'
import './styles.css';
import { useNavigate } from 'react-router-dom';


export const ItemCard = ({ productos }) => {
    let navigate = useNavigate();
   
    const detail = ()=>{
        navigate(`/detail/${productos.id}`)
    } 
    return (
       
        <div className="container-card-class">
        <div className="itemCard">
            <img  src={productos.img} alt={productos.name} className="card-img-style-i"/>
            <p> {productos.name} </p>
            <p> ${productos.price}</p>
            <button onClick={detail} className="btn-detail-item">Ver detalle</button>
         
        </div>
        </div>
       
    );
};



