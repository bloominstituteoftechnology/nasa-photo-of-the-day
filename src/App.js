import React from "react";
import "./App.css";
import NasaApi from './data';
import {  Header, Cards } from './containers';



function App() {
  return (
    <div className="App">
      <Header />
      <NasaApi /> 
      
      {/* <Cards /> */}
    </div>
    
    
  
    
  );
}

export default App;
 