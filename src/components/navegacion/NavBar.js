import React from 'react'
import {Link} from 'react-router-dom'
import CartWidget from '../cards/CartWidget'
import firebase from 'firebase/app'
require('firebase/auth')



const NavBar = () => {
  
  // si esta logueado, que pueda cerrar la sesión
  const logOut = () =>{
    firebase.auth().signOut()
console.log('Ha cerrado sesion')
}

  return (
    <nav className="navBar-Container">
      <ul className="navBar-List">

        <li className="navBar-List-Link">
          <Link to='/' className="navBar-link btn-detail-item" >Cool Store</Link>
          </li>

        <li className="navBar-List-Link">
          <Link to='/' className="navBar-link btn-detail-item">Inicio</Link>
          </li>

        <li className="navBar-List-Link">
          <Link to='/Productos' className="navBar-link btn-detail-item" >Productos</Link>
          </li>

        <li className="navBar-List-Link">
          <Link to='/Cart' className="fas fa-cart-plus navBar-link"><CartWidget/></Link>
          </li>
        <li className="navBar-List-Link">
          {(logOut ? <button onClick={logOut} className="btn-detail-item">Cerrar sesión</button> : 'Gracias por visitarnos')}
          </li>

      </ul>
    </nav>
  )
}
export default NavBar

{/* <nav>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to='/'>Cool Store</Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link className="nav-link active" to='/' >Inicio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to='/Productos' >Productos</Link>
          </li>
          <li className="nav-item">
            <Link to='/Cart' className="nav-link active fas fa-cart-plus"><CartWidget /></Link>
          </li>
          <li>
            {(logOut ? <button onClick={logOut} className="btn-detail-item">Cerrar sesión</button> : 'Gracias por visitarnos')}
          </li>
        </ul>
      </div>
    </div>
  </nav>
</nav> 
)
*/}