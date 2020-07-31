import React from "react";
import NasaPic from  "./components/NasaPic"

import "./App.css";

function App() {
  return (
    <div className="App">
    <div className="container">
      <h1>NASA API Project</h1>
      <p>Pictures from Space</p>
      <NasaPic/>
  
    </div>
      
    </div>
  );
}

export default App;
