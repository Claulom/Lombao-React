import React from 'react'
import {Link} from 'react-router-dom'
import CartWidget from '../cards/CartWidget'



const NavBar = () => {
 
  return (
    <nav>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to='/'>Cool Store</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <Link className="nav-link active" to='/' >Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to='/Productos' >Productos</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to='/Categorias' >Categorias</Link> 
        </li>
        <li className="nav-item">
        <Link to='/Cart' className="nav-link active fas fa-cart-plus"  ><CartWidget /> </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </nav>
    )
}

export default NavBar
