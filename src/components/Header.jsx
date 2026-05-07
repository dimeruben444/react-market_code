import React from 'react'
import { Link } from "react-router-dom";//Para navegar entre paginas se usa link en vez de a
import rmlogo from "../assets/rm-logo.svg";
import logo from "/favicon-128.svg?url"
//HEADER Compartido para todsa las paginas  con el logo el buscador y el boton del carrito 



function Header() {

  return (
    <>
    <header><div className='container'>
    <nav className="header-content">


      <Link to="/"><img src={logo} alt="react market logo" /> </Link>

      
      <div className="header-icons">
        <Link to="/"><i className='icon-user'></i></Link>
        <Link to="/"><i className='icon-cart'></i></Link>
      </div>
      



    </nav>
    </div></header>
    </>
  )
}

export default Header