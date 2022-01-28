import React from 'react'
import {useEffect, useState} from 'react';
import {ItemCard} from "./ItemCard";


export const ItemListCard = () =>{
    
    const [productos, setProductos] = useState();
    const [cargando, setCargando] = useState(false);


    useEffect(() => {
        const URL = "http://localhost:3001/productos";

        setCargando(true);
        fetch(URL)
        .then((response) => response.json())
        .then((data) => setProductos(data))
        .finally(()=> setCargando(false))

    }, []);
    
    if(cargando || !productos) return <p>Cargando productos...</p>;

return (  
     <div className="galeria">
        <div className="container-card-class">
            {cargando ? 
            (<p>Cargando...</p>) : 
            (productos?.map((productos) => (<ItemCard key={productos.id} productos={productos} />)) )}
   </div>
            </div>
        );
    }; 





















/* import {useEffect, useState} from 'react';
import {getArticulos} from "./db"; 
import {ItemCard} from "./ItemCard";



export function ItemListCard() {
   
    const [articulos, setArticulos] = useState([]);
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        
        setCargando(true)
        fetch(URL)
        getArticulos() 
    .then((data) => setArticulos(data)) 
        .catch((error) =>console.error(error))
        .finally(()=> setCargando(false))

    }, []);
    if(cargando || !articulos) return <p>Cargando productos...</p>;
    return (
        <div className="galeria">
            <div className="container-card-class">
            {cargando ? 
            (<p>Cargando...</p>) : 
            (articulos?.map((articulos) => (<ItemCard key={articulos.id} articulos={articulos} />)) )}
   
            </div>
        </div>
    );
};
 */