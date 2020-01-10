import React from "react";
import "./App.css";
import Movies from "./Movies";
import Logo from "./Logo"


function App() {
  return (
    <div className="App">
      <Logo/>
  

      <div className = "movieListContainer">
        <Movies/>
      </div>
    </div>
  );
}

export default App;
