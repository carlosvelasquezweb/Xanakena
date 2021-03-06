import React from "react";
import CartIcon from "./components/CartIcon";import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import { ListProvider } from "./context/CartContext"
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <ListProvider defaultValue={[]}>
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
    </ListProvider>
  );
}

export default App;
