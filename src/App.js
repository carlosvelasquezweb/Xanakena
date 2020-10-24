import React from 'react';
import logo from './logo.svg';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import CartIcon from './components/CartIcon';

function App() {

  return <>
    <NavBar />
    <ItemListContainer name="Productos Xanakena"><CartIcon/>
    </ItemListContainer>
    
  </>
}

export default App;
