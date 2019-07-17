import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Header from "./Components/Header";


function App() {
  const [data, dataSet] = useState({});
 
  console.log(data)

  const fetchData = () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=KUOAg1cDgYGFfTzQQORs9TV0U7ybbx9xyo6Fha4S')
    .then(res => {
      console.log(res.data);
     dataSet(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }

  useEffect(fetchData, []);

  console.log(data);
  
  return (
    <div className="App">
      
     
    </div>
  );
}

export default App;
