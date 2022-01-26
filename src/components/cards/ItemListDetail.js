import React from 'react'
import {useEffect, useState} from 'react';
import {ItemDetailProduct} from "./ItemDetailProduct";


export function ItemListDetail() {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const URL = "http://localhost:3001/productos";

        setCargando(true);
        fetch(URL)
        .then((response) => response.json())
        .then((json) => setProductos(json))
        .catch((err) =>setError(err))
        .finally(()=> setCargando(false))

    }, []);
    
    if(cargando){
    return <p>Cargando productos...</p>;
} else if(error){
    return <p>Ocurrio un error!! {error.message}</p>;
}else
return (  
     <div className="galeria">
        <div className="container-card-class">
        { productos?.map((productos) => {
            return <ItemDetailProduct producto={productos} />})}
        </div>
    </div> 
);
}