import React from 'react'
import {ItemCount} from "../paginas/ItemCount";


const ItemDetailProduct = ({productos}) => {

    return (
        <div className="i-detail-product">

            <img src={productos.img} alt={productos.name}/>
            <p>ID:{productos.id}</p>
            <p>Nombre:{productos.name}</p>
            <p>Precio:{productos.price}</p>
            <p>Stock:{productos.stock}</p>
            <p>Detalle:{productos.description}</p>
            <ItemCount stock={productos.stock} initial="1" />
        </div>
    )
}
export default ItemDetailProduct

