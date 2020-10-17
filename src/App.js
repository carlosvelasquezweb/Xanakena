import React from 'react';
import logo from './logo.svg';
import Title from './components/Title';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title></Title>
        <NavBar></NavBar>
      </header>
    </div>
  );
}

export default App;
