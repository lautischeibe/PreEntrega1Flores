import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "../CartWidget/CartWidget.css";
import "./NavBar.css";
import { Link } from "react-router-dom";


function NavBar() {
    return (

        <nav>
        <Link to="/" className="logo"><h1>Billie Store</h1></Link>
        <ul className="nav-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
            <li><Link to="/carrito">Carrito</Link></li>
        </ul>
        <CartWidget/>
    </nav>

    );
}

export default NavBar;
