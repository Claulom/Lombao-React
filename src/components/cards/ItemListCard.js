import React from 'react'
import {useEffect, useState} from 'react';
import { getFirestore } from '../../firebase';
import {ItemCard} from "./ItemCard";

export const ItemListCard = () => {

    const [products, setProducts] = useState();
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(null)

    useEffect(() => {
        const db = getFirestore();
        const productsCollection = db.collection("Productos")

        const getDataFromFirestore = async () => {
            setCargando(true)
            try {
                const response = await productsCollection.get()
                if (response.empty) console.log("No hay productos")
                setProducts(response.docs.map((docs) => ({ ...docs.data(), id: docs.id })))
            } catch (err) {
                setError(err)
            } finally {
                setCargando(false)
            }
        }
        getDataFromFirestore();

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
                        (products?.map((products) => (<ItemCard key={products.id} productos={products} />)))}
                </div>
            </div>
        );
}; 