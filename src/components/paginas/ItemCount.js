import React from 'react'
import "../cards/card.css";
const ItemCount = ({onAdd}) => {

    let min = 1;
    let max = 10;

 const [add, setAdd] = React.useState(min);

 function increment(){
     const newValue = add + 1;
     if(newValue<=max){
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

export default ItemCount
