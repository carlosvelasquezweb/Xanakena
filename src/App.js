import React from 'react';
import logo from './logo.svg';
import Title from './components/Title';
import Main from './components/Main';
import Btn from './components/Btn';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Title/>
       <Main/>
        <Btn/>
      </header>
    </div>
  );
}

export default App;
