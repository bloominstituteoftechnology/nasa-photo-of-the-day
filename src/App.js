import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";


const apikey = 'WDZCc8bRBjYoeBHATlq06GUOGeezBwjaHgaViNLH'


function App() {
  const [potdData, setPotd] = useState([])

 
  

  useEffect(() => {
    const fetchPOTD = () => {
      axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${apikey}`)
      .then((res) => {
        setPotd(res.data);
      })
      .catch((err) => {
        debugger;
      })
    } 
    fetchPOTD(); 
  }, []);



  return (
    <div className="App">
      <h2>Todays NASA Photo of the day is</h2>
      <h1>{potdData.title}</h1>
      <p>
        <img src={potdData.url} />
      </p>
      <p>
      <button>Click here for more info!</button>
      </p>
      <p>
        {potdData.explanation}
      </p>
      <p>
        Copyright: {potdData.copyright}
      </p>
    </div>
  );
}

export default App;
