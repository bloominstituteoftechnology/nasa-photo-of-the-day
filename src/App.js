import React from "react";
import "./App.css";
import PhotoList from "./components/PhotoList"


function App() {
  return (
    <div className="App">
      <div className="header_container">
        <h1>Nasa Photo of the Day</h1>
        <PhotoList/>
      </div>
    </div>
  );
}

export default App;
