import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import DropDown from "./DropDown";

function App () {
  const[nasaPic, setNasaPic] = useState({data:[]});
  console.log("Here is your array", nasaPic.data);
  const nasa = nasaPic.data;

  useEffect(()=>{
    const fetchImg = () => {
      axios
        .get("https://api.nasa.gov/planetary/apod?api_key=RLYbKz9tWF55dRNCVGiaxs0odRHkptZaP5eOXwbm")
        .then(res => setNasaPic(res))
    };
    fetchImg();
  },[])
  return (
    <div className="App">
      <h1 className="heading">NASA Pic of the day!</h1>  
    
 
      <img 
        src={nasa.url} 
        alt='Nasa Pic of the Day'
        key={nasa.id} 
      />
        <DropDown />
  <p className="explanation">{nasa.explanation}</p>

      
    </div>
  );
}

export default App;
