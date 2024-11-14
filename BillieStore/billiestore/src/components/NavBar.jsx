import React from "react";
import CartWidget from "./CartWidget";
import "./CartWidget.css";

function NavBar() {
    return (
        <div>
        <nav>
        <div className="logo">Billie Store</div>
        <ul className="nav-links">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Carrito</a></li>
        </ul>
        <CartWidget/>
    </nav>
    </div>
    );
}

export default NavBar;
