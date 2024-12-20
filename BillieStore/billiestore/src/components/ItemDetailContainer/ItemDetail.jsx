import React from "react";
import ItemCounter from "../Counter/ItemCounter";
import { useState } from "react";

const ItemDetail = ({ item }) => {

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }

    const handleAgregar = () => {
        console.log({...item, quantity: cantidad})
    }

return (
    <div className="item-detail-container">
        <div className="product-grid">
        <img src={item.img} alt={item.name} />
        <div className="products">
            <h3 className="titulo">{item.name}</h3>
            <p className="description">{item.description}</p>
            <p className="categoria">Categoria: {item.categoria}</p>
            <p className="precio">${item.precio}</p>
            <p className="stock">Stock: {item.stock}</p>
            <ItemCounter cantidad={cantidad} handleSumar={handleSumar} handleRestar={handleRestar} handleSumar={handleSumar} handleAgregar={handleAgregar}/>
            <button>Comprar</button>
        </div>
        </div>
    </div>
);
};

export default ItemDetail;
