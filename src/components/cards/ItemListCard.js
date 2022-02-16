import React from 'react'
import {useEffect, useState} from 'react';
import { getFirestore } from '../../firebase';
import {ItemCard} from "./ItemCard";


export const ItemListCard = () =>{
    
    const [productos, setProductos] = useState();
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(null)


    useEffect(() => {
        const db =  getFirestore();
        const productsCollection = db.collection('productos')

        const getDataFromFirestore = async () => {
            setCargando(true)
            try{
        const response = await productsCollection.get()
        if (response.empty) console.log("No hay productos")
        
        setProductos(response.docs.map((docs)=> ({...docs.data(), id: docs.id})))
    }catch(err){
        setError(err)
    }finally{
        setCargando(false)
    }
    }
       getDataFromFirestore();

        /* const URL = "http://localhost:3001/productos";

        setCargando(true);
        fetch(URL)
        .then((response) => response.json())
        .then((data) => setProductos(data))
        .finally(()=> setCargando(false)) */

    }, []);
    
    if (cargando) {
        return <p>Cargando productos...</p>;
    } else if (error) {
        return <p>Ha habido un error {error.message}</p>
    } else
        return (
            <div className="galeria">
                <div className="container-card-class">
                    {cargando ?
                        (<p>Cargando...</p>) :
                        (productos?.map((productos) => (<ItemCard key={productos.id} productos={productos} />)))}
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