import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
    <NavBar/>

    <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/item/" element={<ItemDetailContainer itemId={13}/>}/>
        
    </Routes>


    <Footer/>
  </BrowserRouter>
  );
}

export default App;
