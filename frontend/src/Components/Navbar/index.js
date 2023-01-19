import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to={"/"} className="nav-link active" aria-current="page" href="!#">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/add"} className="nav-link" href="!#">Add Page</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/addnew"} className="nav-link" href="!#">Add New Product</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar