import React from 'react'
import {ItemCount} from "../paginas/ItemCount";
import {ItemListCard} from "./ItemListCard"; 
import "./ItemCard";


export const ItemListContainer = () => {
    return (
        <div>
            <>
            <ItemListCard/>
           <ItemCount stock="12" initial="1"/>
    </>
        </div>
    );
};


