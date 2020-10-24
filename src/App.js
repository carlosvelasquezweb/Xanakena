import React from 'react';
import logo from './logo.svg';
import Title from './components/Title';
import NavBar from './components/NavBar';
import Lista from './components/Lista';

function App() {

  return <>

    <NavBar />
    <Title name="Productos #1" />
    <div className="ItemListContainer">
      <Lista name="Productos #1" price="2500" />
      <Lista name="Productos #3" price="2500" />
      <Lista name="Productos #4" price="2500" />
    </div>
  </>
}

export default App;
