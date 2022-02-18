import React, {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { getFirestore } from '../../firebase'


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

    return (
        <div>
            <h1>Gracias por elegirnos! Te esperamos pronto!!!</h1>
            <p> Tu compra:{order.buyer && order.buyer.name}</p>
        </div>
    )
}

export default SendOrder
