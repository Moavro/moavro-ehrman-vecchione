import React from "react";
import {Link} from "react-router-dom/cjs/react-router-dom.min"
import "../Nabvar/Navbar.css"

function Navbar(){
    return (
        <header className="header">
            <div className="navegador">
                <img src="img/logo_peliculones.png" alt="logo" className="logo"></img>
                <h1 clasName="tituloprincipal">PELICULONES</h1>
                
            </div>
            <nav className="secciones_header">
                <ul>
                    <li className="items">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="items">
                        <Link to="/pelis">Ver todas las Peliculas</Link>
                    </li>
                    <li className="items">
                        <Link to="/series">Ver todas las series</Link>
                    </li>
                    <li className="items">
                        <Link to="/favoritos">Favoritos</Link>
                    </li>
                </ul>
            </nav>   
        </header>
    )
}



export default Navbar