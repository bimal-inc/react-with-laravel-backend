import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
  <div className="container-fluid">
    <a  className="navbar-brand" href="#E">E-com Site</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mx-3">
          <NavLink exact to="/add" className="nav-link active bg-primary" aria-current="page" >Add Products</NavLink>
        </li>
        <li  className="nav-item">
          <NavLink exact to="/update"  className="nav-link" >Update</NavLink>
          
        </li>
    
        <li className="nav-item mx-3">
          <NavLink exact to="/login" className="nav-link" >Login</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink  exact to="/register" className="nav-link "  >Register</NavLink>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </>
    )
}

export default Navbar
