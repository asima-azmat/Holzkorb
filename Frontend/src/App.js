import React from 'react';
import logo from './logo.png';
import './App.css';
import SellItem from './components/SellItem.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
      <SellItem></SellItem>


    </div>
  );
}

export default App;
