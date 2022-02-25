import React from 'react'
import "../cards/styles.css";

export const ItemCount = ({add, setAdd}) => {

    

 function increment(){
     setAdd((prev) => prev + 1);
   
 }
    
function decrement(){
    if(add > 1){
    setAdd(add - 1);
}
 }

    return (
        <div className="contador-click">
            <button onClick={decrement} className="btn-min">-</button>
            <span className="num-item">{add}</span>
            <button onClick={increment} className="btn-max">+</button>
        </div>
    )
}

