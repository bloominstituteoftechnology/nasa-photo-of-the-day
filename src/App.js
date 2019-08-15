import React from "react";
import PhotoCardInfo from "./components/PhotoCardInfo.js";
import logo from './logo.png';
import "./App.css";

function App() {  

  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
                
      </header>
            
      <PhotoCardInfo />

    </div>
  );
}

export default App;



