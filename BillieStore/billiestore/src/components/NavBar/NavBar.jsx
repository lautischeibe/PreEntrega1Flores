import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "../CartWidget/CartWidget.css";
import "./NavBar.css";
import { Link } from "react-router-dom";


function NavBar() {
    return (

        <nav>
        <Link to="/" className="logo"><h1>Billie Store</h1></Link>
        <ul className="nav-links" >
            <li><Link className="nav-links" to="/">Inicio</Link></li>
            <li><Link className="nav-links" to="/productos">Productos</Link></li>
            <li><Link className="nav-links" to="/productos/agua">Agua</Link></li>
            <li><Link className="nav-links" to="/productos/fuego">Fuego</Link></li>
            <li><Link className="nav-links" to="/productos/electrico">Electrico</Link></li>
            <li><Link className="nav-links" to="/productos/psiquico">Psiquico</Link></li>
            <li><Link className="nav-links" to="/productos/fantasma">Fantasma</Link></li>
            <li><Link className="nav-links" to="/us">Us</Link></li>

        </ul>
        <CartWidget/>
    </nav>

    );
}

export default NavBar;
