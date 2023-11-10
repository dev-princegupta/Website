import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div >
        <nav className="navbar navbar-expand-lg navbar-light w-100" style={{"background":"#000000"}}>
  <a ><Link to="/"  class="navbar-brand ml-5 mr-5"    style={{"color":"#FF6006" , "fontWeight":"bold"}}>MLVOLT</Link></a>
  <button class="navbar-toggler ml-5" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{"background":"white" }}>
    <span class="navbar-toggler-icon"></span>
  </button>


  <div class="collapse navbar-collapse ml-5 pl-2 w-100 " id="navbarNav"  >
    <ul class="navbar-nav ">
      <li class="nav-item active">
        <a><Link to="/about" className='nav-link mr-5 ml-5' style={{"color":"#DFDFDF", "fontWeight":"bold"}}>ABOUT</Link></a>
      </li>
      <li class="nav-item">
      <a ><Link to="/projects" class="nav-link mr-5 ml-5" style={{"color":"#DFDFDF", "fontWeight":"bold"}}> PROJECTS</Link></a>
      </li>
      <li class="nav-item">
      <a ><Link to="/services" class="nav-link mr-5 ml-5" style={{"color":"#DFDFDF", "fontWeight":"bold"}}> SERVICES</Link></a>
      </li>
      <li class="nav-item">
      <a ><Link to="/contact" class="nav-link mr-5 ml-5" style={{"color":"#DFDFDF", "fontWeight":"bold"}}> CONTACT</Link></a>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Nav