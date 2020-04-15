import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';

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
      <h1>NASA Pic of the day!</h1>  
 
      <img 
        src={nasa.url} 
        alt='Nasa Pic of the Day'
        key={nasa.id} 
      />
  <p>{nasa.explanation}</p>

      
    </div>
  );
}

export default App;
