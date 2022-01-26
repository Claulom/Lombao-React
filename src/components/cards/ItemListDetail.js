 import React from 'react'
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailProduct from "./ItemDetailProduct";


export const ItemListDetail = () =>{
    const {productosId} = useParams();
    const [productos, setProductos] = useState();
    const [cargando, setCargando] = useState(false);


    useEffect(() => {
        const URL = `http://localhost:3001/productos/${productosId}`;

        setCargando(true);
        fetch(URL)
        .then((response) => response.json())
        .then((data) => setProductos(data))
        .finally(()=> setCargando(false))

    }, [productosId]);
    
    if(cargando || !productos) return <p>Cargando productos...</p>;

return (  
     <div className="galeria">
        <div className="container-card-class">
        </div>
        <ItemDetailProduct productos={productosId} />
        </div>
        );
    }; 
    /* { productos?.map((productos) => {
        return <ItemDetailProduct productos={productos} />})} */