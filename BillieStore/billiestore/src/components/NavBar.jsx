import React from "react";

function NavBar() {
    const productosEnCarrito = 6;

    return (
        <div>
        <nav>
        <div className="logo">Mi Tienda</div>
        <ul className="nav-links">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Carrito</a>
            <span> { productosEnCarrito > 5 ? 'Hay descuento' : productosEnCarrito } </span>
            </li>
        </ul>
    </nav>
    </div>
    );
}

export default NavBar;
