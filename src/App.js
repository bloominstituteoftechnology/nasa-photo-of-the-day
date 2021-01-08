import React, { useState, useEffect } from "react";
import "./App.css";
import PhotoImport from './NasaPotd';


//nasa axios request:
//https://api.nasa.gov/planetary/apod



function App() {
  
  return (
    
    <div className="App">
      
      <PhotoImport />
      
      

    </div>
  );
}

export default App;
