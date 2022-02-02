import React from 'react'
import "../cards/card.css";

export const ItemCount = ({stock,onAdd}) => {

    let min = 1;
 
 const [add, setAdd] = React.useState(min);

 function increment(){
     const newValue = add + 1;
     if(newValue<=stock){
         setAdd(newValue);
     }
 }
    
function decrement(){
        const newValue = add - 1;
        if(newValue>=min){
            setAdd(newValue);
        }
        
 }

 function onAdd(){
    alert("Compraste"  + add ) 
}


    return (
        <div className="contador-click">
            <span className="num-item">Cantidad disponible{add - stock}</span>
            <span className="num-item">{add}</span>
            <button onClick={decrement} className="btn-min">-</button>
            <button onClick={increment} className="btn-max">+</button>
            <button   className="btn-add-cart">Agregar al carrito</button> 
            <button onClick={onAdd} className="btn-add-cart">Comprar ahora</button>
           
        </div>
    )
}


/* onClick={addToCart} */