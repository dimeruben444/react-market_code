import React from 'react'
import { Link } from "react-router-dom";//Para navegar entre paginas se usa link en vez de a
import rmlogo from "../assets/rm-logo.svg";
import logo from "/favicon-128.svg?url"
//HEADER Compartido para todsa las paginas  con el logo el buscador y el boton del carrito 



function Header() {

  return (
    <>
    <div className='header-topbar'>
      <span> <i className='icon-diamond'></i>CLIENTE VIP</span>
      <span> <i className="icon-discout"></i>Descuentos exclusivos</span>
      <span> <i className="icon-rocket"></i>Envios 24/48 horas*</span>
      <span> <i className="icon-dollar"></i>Acumula Puntos</span>
    </div>
    
    <header>
    <nav className="header-content">

      


      <Link to="/"><img src={logo} alt="react market logo" className='header-logo'/></Link>

      
      <div className="header-icons">
        <Link to="/"><i className='icon-question'></i></Link>
        <Link to="/"><i className='icon-user'></i></Link>
        <Link to="/" className='header-cart'><i className='icon-cart'></i><span>4</span></Link>
      </div>
      



    </nav>
    </header>
    </>
  )
}

export default Header