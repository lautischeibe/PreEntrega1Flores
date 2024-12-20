import React from "react";

const ItemDetail = ({ item }) => {
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
            <button>Comprar</button>
        </div>
        </div>
    </div>
);
};

export default ItemDetail;
