import React from 'react'
import './card.css';
import {ItemCount} from "../paginas/ItemCount"; 


const ItemDetailProduct = ({productos}) => {

    const [cant, setCant] = React.useState(0);
 if(cant === 0){
      <ItemCount onAddCallback={addToCart}/>
    
 }else{
        <button className="btn-add-cart">Finalizar compra</button>
 }
 function addToCart({add}){
    const newItem = cant + add;
    if (newItem === add){
        setCant(newItem)
    }

} 
    return (
        <div className="i-detail-product">
            <img src={productos.img} alt={productos.name} className="card-img-style"/>
            <div  className="i-list-detail">
            <p>ID:{productos.id}</p>
            <p>Nombre:{productos.name}</p>
            <p>Precio:{productos.price}</p>
            <p>Stock:{productos.stock}</p> 
            <p>Detalle:{productos.description}</p>
            <button  onClick={addToCart} className="btn-add-cart">Agregar al carrito</button> 
            
            </div>
            </div>
        
    )
}
export default ItemDetailProduct

