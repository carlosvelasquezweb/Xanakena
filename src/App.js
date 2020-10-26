import React from 'react';
import logo from './logo.svg';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import CartIcon from './components/CartIcon';
import ItemCount from './components/ItemCount';

function App() {

  return <>
    <NavBar />
    <ItemListContainer name="Productos Xanakena" />
    <ItemCount stock="10" initial="1"/>
  </>
}

export default App;
