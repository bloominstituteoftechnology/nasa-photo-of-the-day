import React from "react";
import axios from "axios";
import ContainerCard from "./components/containerCard";


import "./App.css";

function App() {
  return (
    <div className="App">
      <p>
        Nasa of Day!!!
      </p>
      <ContainerCard/>
      
    </div>
    
  );
}

export default App;
