import React from 'react'
import './card.css';
import {ItemCount} from "../paginas/ItemCount"; 
import {useState} from 'react'
import {useCart} from "../../context/cartContext"
import { useNavigate } from 'react-router-dom';

const ItemDetailProduct = ({productos}) => {
    let navigate = useNavigate();

    const Cart = ()=>{
        navigate(`/Cart/`)
    } 
    const {addItem} = useCart()
    const [add, setAdd] = useState(1);
    
const handleAddToCart = () =>{
    addItem(productos, add);
   
} 

    return (
        <div className="i-detail-product">
            <img src={productos.img} alt={productos.name} className="card-img-style"/>
            <div  className="i-list-detail">
            <p>ID:{productos.id}</p>
            <p>Nombre:{productos.name}</p>
            <p>Precio:{productos.price}</p>
            <p>Detalle:{productos.description}</p>
            <span className="num-item">Cantidad disponible:{productos.stock} </span>
            <ItemCount add={add} setAdd={setAdd}/>
             <button onClick={handleAddToCart} className="btn-add-cart">Agregar al carrito</button>
            <button onClick={Cart} className="btn-add-cart">Ir al carrito</button> 
            </div>
            </div>
            
            
            )
        }
        export default ItemDetailProduct
        
        
