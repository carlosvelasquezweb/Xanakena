import React from 'react';
import logo from './logo.svg';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import CartIcon from './components/CartIcon';

function App() {

  return <>

    <div className="navbar">

      <div className="subnav">
        <CartIcon />
      </div>
      <NavBar />
    </div>
    <ItemListContainer name="Productos Xanakena" />
  </>
}

export default App;
