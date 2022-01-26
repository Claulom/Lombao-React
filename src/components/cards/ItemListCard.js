import {useEffect, useState} from 'react';
import {getArticulos} from "./db";
import {ItemCard} from "./ItemCard";


export function ItemListCard() {
    const [articulos, setArticulos] = useState([]);
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        setCargando(true)
        getArticulos()
        .then((data) => setArticulos(data))
        .catch((error) =>console.error(error))
        .finally(()=> setCargando(false))

    }, []);
    return (
        <div className="galeria">
            <div className="container-card-class">
            {cargando ? 
            (<p>Cargando...</p>) : 
            (articulos?.map((articulo) => (<ItemCard key={articulo.id} articulo={articulo} />)) )}
            </div>
        </div>
    );
};
