 import React from 'react'
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase';
import ItemDetailProduct from "./ItemDetailProduct";


export const ItemListDetail = () => {
    const { productosId } = useParams();
    const [productos, setProductos] = useState();
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        const db = getFirestore()
        const productsCollection = db.collection('Productos')
        const idProducts = productsCollection.doc(productosId)
        setCargando(true)
        idProducts.get().then(response => {
            if (!response.exists) console.log("El producto no existe")
            setProductos({ ...response.data(), id: response.id })
        })
            .finally(() => setCargando(false))

    }, [productosId]);

    if (cargando || !productos) return <p>Cargando productos...</p>;

    return (
        <div className="galeria">
            <div className="container-card-class">
            </div>
            <ItemDetailProduct productos={productos} />
        </div>
    );
};
