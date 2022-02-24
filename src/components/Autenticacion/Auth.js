import React, { useState } from 'react'
import firebase from 'firebase/app'
require('firebase/auth')

const Auth = (props) => {
   const [registrando, setRegistrando] = useState(false)


   //Creando un usuario y mandandolo al estado
   const userAdd = (email, password)=>{
    firebase.auth().createUserWithEmailAndPassword(email, password).then((usuarioFirebase)=>{
           console.log("usuario creado", usuarioFirebase)
           props.setUsuario(usuarioFirebase.user)
       })
       
   }

   //Si esta registrado, que haga inicio de sesión
   const iniciarSesion= (email, password)=>{
    firebase.auth().signInWithEmailAndPassword(email, password).then((usuarioFirebase)=>{
        console.log("Sesión Iniciada con: ", usuarioFirebase.user)
        props.setUsuario(usuarioFirebase)
    })
   }

   //evitando que se recargue la pagina, condicional para ver si esta o no registrado.
   const submitHandler = (e)=>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        
        if(registrando){
            userAdd(email, password)
        }
        if(!registrando){
            iniciarSesion(email, password)
        }
   }

    return (
        <div>
            <button onClick={()=> setRegistrando(!registrando)} className="btn-detail-item">
            {registrando ? "¿Ya tenés cuenta? Inicia sesión" : "¿No tenés cuenta? ¡Registrate ahora!"}
            </button>
            <form onSubmit={submitHandler} className="form-style">
                <label htmlFor="email">Correo Electronico</label>
                <input type="email" id="email" className="form-style_input" />
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" className="form-style_input"/>
                <button type="submit" className="btn-detail-item">{registrando ? "Registrate" : "Inicia Sesión"}</button>
            </form>
        </div>
    )
}

export default Auth
