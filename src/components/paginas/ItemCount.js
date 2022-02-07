import React from 'react'
import "../cards/card.css";

export const ItemCount = ({add, setAdd}) => {

    

 function increment(){
     setAdd((prev) => prev + 1);
      /* const newValue = add + 1; 
     if(newValue<=stock){
         setAdd(newValue);
     }  */
 }
    
function decrement(){
    setAdd((prev) => prev - 1);
     /*    const newValue = add - 1;
        if(newValue>=add){
            setAdd(newValue);
        }
         */
 }




    return (
        <div className="contador-click">
            <button onClick={decrement} className="btn-min">-</button>
            <span className="num-item">{add}</span>
            <button onClick={increment} className="btn-max">+</button>
        </div>
    )
}


/* onClick={addToCart} */