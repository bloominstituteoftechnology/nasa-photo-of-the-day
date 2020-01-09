import React from "react";
import "./App.css";
import Header from './components/Header.js';
import Photos from './components/Photos';

function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <Header />
        <Photos />
      </div>
    </div>
  );
}

export default App;
