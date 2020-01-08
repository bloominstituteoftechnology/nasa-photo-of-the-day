import React from "react";
import "./App.css";
import Movies from "./Movies";


function App() {
  return (
    <div className="App">
      <h1 >Star Wars Movie Reviews</h1>
      <div className = "movieListContainer">
        <Movies/>
      </div>
    </div>
  );
}

export default App;
