import React, {useState} from "react";
import "../App.css";
import Apod from "./Apod"
import axios from "axios"



// let today = new Date();
// let day = today.getDay()
// let month = today.getMonth() + 1.padStart(2,'0')
// let year = today.getYear




function App() {
  return (
    <div className="App">


      <Apod />


    </div>

  );
}

export default App;
