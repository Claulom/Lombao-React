import {useEffect, useState} from 'react';
import {getArticulos} from "./db";
import {ItemCard} from "./ItemCard";


export function ItemListContainer() {
    const [articulos, setArticulos] = useState([]);

    useEffect(() => {
        getArticulos()
        .then((data) => setArticulos(data))
        .catch((error) =>console.error(error))

    }, []);
    return (
        <div>
            {articulos.map((articulos) => (<ItemCard key={articulos.id} articulo={articulos} />))} 
        </div>
    );
};


