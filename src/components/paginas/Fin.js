import React from 'react'
import { Outlet } from 'react-router-dom'
import {useState} from 'react'
import {useCart} from "../../context/cartContext"
import { useNavigate } from 'react-router-dom';
import { getFirestore } from '../../firebase'  
require('firebase/auth')

const Fin = () => {
    let navigate = useNavigate();
    const { cart, totalCompra, clear } = useCart()
    const [name, setName] = useState('')
    const [apellido, setApellido] = useState('')
    const [phone, setPhone] = useState('')
    const [correo, setCorreo] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        if(!name || !apellido || !phone || !correo){
            alert('Por favor llene los campos')
            return false
        }
        const newOrder = { buyer: {name, apellido, phone, correo}, compra: cart, total: totalCompra() }
        console.log(newOrder)
        const db = getFirestore()
        db.collection('orders')
            .add(newOrder)
            .then((res) => {
                console.log('Compra realizada correctamente', res.id)
                navigate(`/SendOrder/${res.id}`)
                clear()
            })
            .catch((err) => console.log('Ha ocurrido un error', err))

           
        }
        return (
            <div>
            <Outlet />
            <p>Finalizacion de compra</p>
            <form onSubmit={handleSubmit} className="form-style">
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" value={name} onChange={(e) => setName(e.target.value)} className="form-style_input"/>
                <label htmlFor="apellido">Apellido:</label>
                <input type="text" id="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} className="form-style_input"/>
                <label htmlFor="telefono">Teléfono:</label>
                <input type="phone" id="telefono" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-style_input"/>
                <label htmlFor="correo">Email:</label>
                <input type="email" id="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} className="form-style_input"/>
               <input type="submit" value="Enviar compra" className="btn-add-cart"/>
            </form>
        </div>
    )
}

export default Fin
