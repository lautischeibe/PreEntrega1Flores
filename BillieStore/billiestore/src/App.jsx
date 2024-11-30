import React from "react";
import "./index.css";

function App() {
  return (
    <div>
    <section className="products">
        <h1>Productos Destacados</h1>
        <div className="product-grid">
            <div className="product">
                <img src="img/Psyduck.png" alt="Producto 1"/>
                <h2>Psyduck NFT</h2>
                <p>$10.00</p>
                <button>Añadir al carrito</button>
            </div>
            <div className="product">
                <img src="img/Starmie.png" alt="Producto 2"/>
                <h2>Starmie NFT</h2>
                <p>$20.00</p>
                <button>Añadir al carrito</button>
            </div>
            <div className="product">
                <img src="img/Gengar.png" alt="Producto 3"/>
                <h2>Gengar NFT</h2>
                <p>$70.00</p>
                <button>Añadir al carrito</button>
            </div>
            <div className="product">
                <img src="img/Raichu.png" alt="Producto 4"/>
                <h2>Raichu NFT</h2>
                <p>$45.00</p>
                <button>Añadir al carrito</button>
            </div>
            <div className="product">
                <img src="img/Vulpix.png" alt="Producto 5"/>
                <h2>Vulpix NFT</h2>
                <p>$40.00</p>
                <button>Añadir al carrito</button>
            </div>
            <div className="product">
                <img src="img/Venomoth.png" alt="Producto 6"/>
                <h2>Venomoth NFT</h2>
                <p>$100.00</p>
                <button>Añadir al carrito</button>
            </div>
        </div>
    </section>

    <footer className="footer">
        <p>&copy; 2024 Mi Tienda Online</p>
    </footer>
    </div>
  );
}

export default App;
