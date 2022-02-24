import React, {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { getFirestore } from '../../firebase'
import { useNavigate } from 'react-router-dom';

const SendOrder = () => {
const {orderId} = useParams()
const [order, setOrder] = useState({})

const finCompra = async (orderId)=>{

    const db = getFirestore()
    const info =  db.collection("orders")
    const idOrder = info.doc(orderId)
    const response = await idOrder.get()
    if (!response.exists) console.log("El producto no existe")
    setOrder({ ...response.data(), id: response.id })
    console.log(order)
}
useEffect(() => {
   finCompra(orderId)  
}, [orderId])


    let navigate = useNavigate();
    const Productos = ()=>{
        navigate(`/Productos/`)
    } 

    //Este if es para que espere a la promesa
    if(!order.id){
        return <p>Cargando...</p>
    }

    return (
        <div >
            <h1>{order.buyer.name} </h1>
            <h3> Gracias por elegirnos!,Te esperamos pronto!!!</h3>
            <p> Tu compra:</p> 
            <p>{order.compra[0].name}</p>      
            <button onClick={Productos} className="btn-detail-item">Ir a productos</button>
        </div>
    )
}

export default SendOrder
