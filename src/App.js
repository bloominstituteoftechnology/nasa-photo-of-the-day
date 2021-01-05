import React, { useState, useEffect } from "react";
import "./App.css";
import DropDown from "./Dropdown";
import PhotoImport from './NasaPotd';


//nasa axios request:
//https://api.nasa.gov/planetary/apod



function App() {
  
  return (
    <div className="App">
      <DropDown />
      <PhotoImport />

    </div>
  );
}

export default App;
