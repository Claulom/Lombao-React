import React from 'react'
import './styles.css';
import {ItemCount} from "../paginas/ItemCount"; 
import {useState} from 'react'
import {useCart} from "../../context/cartContext"
import { useNavigate } from 'react-router-dom';

const ItemDetailProduct = ({productos}) => {
    let navigate = useNavigate();

    const Productos=()=>{
        navigate(`/Productos`)
    }
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
            <p> {productos.name} </p>
            <p> $ {productos.price} </p>
            <p> "{productos.description}" </p>
            <span className="num-item">Cantidad disponible: {productos.stock} </span>
            <ItemCount add={add} setAdd={setAdd}/>
             <button onClick={handleAddToCart} className="btn-add-cart">Agregar al carrito</button>
            <button onClick={Productos} className="btn-add-cart">Volver a productos</button>
            <button onClick={Cart} className="btn-add-cart">Ir al carrito</button> 
            </div>
            </div>
            
            
            )
        }
        export default ItemDetailProduct
        
        
