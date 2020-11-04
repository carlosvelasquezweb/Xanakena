import React from "react";
import logo from "./logo.svg";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

import CartIcon from "./components/CartIcon";

function App() {
  return (
    <>
      <NavBar />
      <br></br>
      <ItemListContainer name="Productos Xanakena" />
      <ItemDetailContainer />
    </>
  );
}

export default App;
