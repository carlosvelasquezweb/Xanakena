import React from 'react';
import logo from './logo.svg';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import CartIcon from './components/CartIcon';
import ItemCount from './components/ItemCount';

function App() {

  return <> 
  <NavBar/>
  <br></br>
    <ItemListContainer name="Productos Xanakena" />
 
  </>
}

export default App;
