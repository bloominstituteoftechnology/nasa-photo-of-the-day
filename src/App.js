import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import Photo from "./Photo.js"
import Info from './Info.js'

function App() {
  
  
  

  return (
    <div className="App">
     
      <Info/>
      <p>
        API from Americas space station <span role="img" aria-label='go!'>🚀</span>!
      </p>
        <Photo/>
       
      </div>
  );
  }

export default App;
