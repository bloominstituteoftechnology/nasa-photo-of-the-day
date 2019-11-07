import React from "react";
import "./App.css";
import NavLinks from "./Components/PageTop/NavBar"
import Photos from "./data.js"

function App() {
  return (
    <div className="App">
      <NavLinks />
      <h2>Picture of the Day</h2>
      <Photos />
      <p>Description: </p>
      <p>Date</p>
    </div>
    
  );
}

export default App;
