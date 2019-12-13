import React from "react";
import "./App.css";
import PhotoGrid from "./Components /PhotoGrid";
import {
  Container
} from "reactstrap";




function App() {
  
  
  
  return (
    <div className="App">
      <div className = "header_container">
        
         <h1>Nasa's Photo Of The Day </h1>
    </div>
    <div className = "image-cards">
    <PhotoGrid />
    </div>
     
     
      
     
    
    
    </div>
  );
}

export default App;
