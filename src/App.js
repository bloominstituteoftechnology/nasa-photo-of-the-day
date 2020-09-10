import React from "react";
// import React, { useState, useEffect } from "react";
import "./App.css";
// import axios from "axios"
import NasaContent from './NasaContent';

function App() {
  
 
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <NasaContent />
      
    </div>
   
  );
}

export default App;
