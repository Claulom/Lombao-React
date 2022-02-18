import React from 'react'
import {Link} from 'react-router-dom'
import CartWidget from '../cards/CartWidget'
import Categorias from '../paginas/Categorias';
import firebase from 'firebase/app'
require('firebase/auth')



const NavBar = () => {
  
  // si esta logueado, que pueda cerrar la sesión
  const logOut = () =>{
    firebase.auth().signOut()
}

  return (
    <nav>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to='/'>Cool Store</Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link active" to='/' >Inicio</Link>
                <Categorias />
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to='/Productos' >Productos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to='/Categorias/categoryId' >  </Link>
              </li>
              <li className="nav-item">
                <Link to='/Cart' className="nav-link active fas fa-cart-plus"><CartWidget /> </Link>
              </li>
              <li>
                <button onClick={logOut} className="btn-detail-item">Cerrar sesión</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </nav>
  )
}

export default NavBar
