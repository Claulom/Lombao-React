import React from 'react'
import './card.css';

const ItemCard = ({name, price}) => {
    return (
        <div className="itemCard">
            <p>Imagen:</p>
            <p>Nombre:{name}</p>
            <p>Precio:{price}</p>
           
        </div>
    )
}

export default ItemCard
