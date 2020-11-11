import React from "react";
import logo from "./logo.svg";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";

import CartIcon from "./components/CartIcon";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <br/>
          <ItemListContainer name="Productos Xanakena" />
        </Route>
        <Route path="/item/:id">
          <ItemDetailContainer />
        </Route>
        <Route path="/cart/">
          <Cart/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
