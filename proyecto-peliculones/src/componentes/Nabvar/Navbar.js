import React from "react";
import {Link} from "react-router-dom/cjs/react-router-dom.min"
import "../Nabvar/Navbar.css"

function Navbar(){
    return (
        <nav> 
            <ul>
             <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/personajes">Ver todas las Peliculas</Link>
            </li>
            <li>
                <Link to="/favoritos">Ver todas las series</Link>
            </li>
            </ul>
        </nav>
    )
}

export default Navbar