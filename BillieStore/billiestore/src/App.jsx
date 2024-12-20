import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


function App() {
  return (
  <BrowserRouter>
    <NavBar/>

    <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/productos" element={<ItemListContainer/>}/>
        <Route path="/productos/:categoria" element={<ItemListContainer/>}/>
    </Routes>

    <Footer/>
  </BrowserRouter>
  );
}

export default App;
