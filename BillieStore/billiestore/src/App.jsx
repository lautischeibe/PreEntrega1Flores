import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
  <>
    <NavBar/>
    <ItemListContainer/>
    <ItemDetailContainer itemId={2}/>
    <Footer/>
  </>
  );
}

export default App;
