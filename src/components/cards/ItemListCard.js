import {useEffect, useState} from 'react';
/* import {getArticulos} from "./db"; */
import {ItemCard} from "./ItemCard";
import { useParams } from 'react-router-dom';
import ItemDetailProduct from "./ItemDetailProduct";


export function ItemListCard() {
    const {productosId} = useParams();
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        const URL = `http://localhost:3001/productos/${productosId}`;
        setCargando(true)
        fetch(URL)
        /* getArticulos() */
       /*  .then((data) => setArticulos(data)) */
       .then((res) => res.json())
       .then((data) => setProductos(data))
        .catch((error) =>console.error(error))
        .finally(()=> setCargando(false))

    }, [productosId]);
    if(cargando || !productos) return <p>Cargando productos...</p>;
    return (
        <div className="galeria">
            <div className="container-card-class">
            {cargando ? 
            (<p>Cargando...</p>) : 
            (productos?.map((productos) => (<ItemCard key={productos.id} productos={productos} />)) )}
             <ItemDetailProduct productos={productosId} />
            </div>
        </div>
    );
};
