import React from 'react'
import { Link } from "react-router-dom";//Para navegar entre paginas se usa link en vez de a
import rmlogo from "../assets/rm-logo.svg";
//HEADER Compartido para todsa las paginas  con el logo el buscador y el boton del carrito 



function Header() {

  return (
    <>
    <header>
        <Link to="/"><img src={rmlogo} alt="react market logo" /></Link>

    </header>
    </>
  )
}

export default Header