import React from 'react'
import './card.css';
import {ItemCount} from "../paginas/ItemCount"; 
import {useState} from 'react'
import {useCart} from "../../context/CartContext"
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


function onAdd(){
    alert("Compraste"  + add ) 
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
            <button onClick={onAdd}  className="btn-add-cart">Comprar ahora</button>
            <button onClick={Cart} className="btn-add-cart">Ir al carrito</button> 
            </div>
            </div>
            
            
            )
        }
        export default ItemDetailProduct
        
        
        {/*   <ItemCount stock={productos.stock} initial="1" id={productos.id} /> */}
        {/*  {!cantCart ? <button onClick={handleAddToCart}>Añadir al carrito</button> : <button >Ir al carrito</button>} */}