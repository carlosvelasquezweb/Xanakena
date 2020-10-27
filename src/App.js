import React from 'react';
import logo from './logo.svg';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import CartIcon from './components/CartIcon';
import ItemCount from './components/ItemCount';

function App() {

  return <><NavBar/>
  <div className="container">
    
    <ItemListContainer name="Productos Xanakena" />
 
  </div></>
}

export default App;
