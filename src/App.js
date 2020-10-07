import React from "react";
import "./App.css";
import NasaPhoto from "./NasaPhoto"
import NavBar from "./NavBar"

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <NasaPhoto />
      </div>
    </div>
  )
}


export default App;
