import React from 'react'
import "./ItemCard";

export const ItemListCard = ({ItemCard})=> {

    const articulos = [{
        id:1, 
        name:'Zapatillas', 
        price:10000, 
        stock:20,
    },
    {
        id:2, 
        name:'Campera', 
        price:9000, 
        stock:25
    }
];

    return (
        <div>
             {articulos.map((articulos) => (<ItemCard key={articulos.id} articulo={articulos} />))}
        </div>
    );
};

