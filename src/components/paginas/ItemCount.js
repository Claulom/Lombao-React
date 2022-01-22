import React from 'react'
import "../cards/card.css";
export const ItemCount = ({stock,onAdd}) => {

    let min = 1;
    /* let stock;
 */
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
    alert("Compraste"  + add +  "items")
}
    return (
        <div className="contador-click">
            <button onClick={decrement} className="btn-min">-</button>
            <span className="num-item">{add}</span>
            <button onClick={increment} className="btn-max">+</button>
            <button onClick={onAdd} className="btn-add-cart">Agregar al carrito</button>
        </div>
    )
}


