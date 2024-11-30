import React from "react";
import {FaShoppingCart} from "react-icons/fa";

function CartWidget() {
    const productosEnCarrito = 5;

    return (
    <div className="cart-widget">
        <FaShoppingCart size={15} />
        <span className="badge">{productosEnCarrito}</span>
    </div>
    );
}

export default CartWidget;