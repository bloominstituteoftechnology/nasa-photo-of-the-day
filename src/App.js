import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Components from "./Components";


 

function App() {
  const [nasaData, setNasaData] = useState({});

  useEffect( () => {

    axios.get(`https://api.nasa.gov/planetary/apod?api_key=gpzL4GbEvaB1umtOJtVtIcjuL7vrXnXC8fHzFwwF`)
    .then(res => {
      console.log(res);
      setNasaData(res.data)
      
    })
    .catch(error => {
      console.log(error);
    
  })

} ,[])


  return (
    <div className="App">
     <Components data={nasaData}/>
      <input  type="date"></input>
    </div>
  );
}

export default App;
