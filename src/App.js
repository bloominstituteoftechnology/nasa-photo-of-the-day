import React from "react";
import "./App.css";
import Header from './Components/Header'
import Img from './Components/Img'
import Details from './Components/Details'

function App() {
  return (
    <div className="App">
      <p>
        <Header />
        <Img />
        <Details />
      </p>
    </div>
  );
}

export default App;
