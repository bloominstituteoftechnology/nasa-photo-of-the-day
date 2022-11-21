import React from "react";
import "./App.css";
import NasaApi from './data';
import {  Header, Cards } from './containers';



function App() {
  return (
    <div className="App">
      <NasaApi /> 
      <Header />
      <Cards />
    </div>
    
    
  
    
  );
}

export default App;
 