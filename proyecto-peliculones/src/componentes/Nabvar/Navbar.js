import React from "react";
import {Link} from "react-router-dom/cjs/react-router-dom.min"
import "../Nabvar/Navbar.css"

function Navbar(){
    return (
        <header className="header">
            <div className="navegador">
                <img src="img/logo_peliculones.png" alt="logo" className="logo"></img>
                <h1 clasName="tituloprincipal">PELICULONES</h1>
                <form className= "buscador" action="./buscador.html" method="get">
                    <input className ="barra_buscadora" type="text" placeholder="Buscador" name="buscador" value=""></input>
                </form>
            </div>
            <nav className="secciones_header">
                <ul>
                    <li className="items">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="items">
                        <Link to="/personajes">Ver todas las Peliculas</Link>
                    </li>
                    <li className="items">
                        <Link to="/favoritos">Ver todas las series</Link>
                    </li>
                </ul>
            </nav>   
        </header>
    )
}



export default Navbar