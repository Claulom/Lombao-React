import {useEffect, useState} from 'react';
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
