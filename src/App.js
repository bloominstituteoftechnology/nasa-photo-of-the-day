import React, { useState, useEffect } from 'react';
import "./App.css";
import axios from 'axios';


const nasaData = 'https://lambda-github-api-server.herokuapp.com/';

function App() {

  const [nasaInfo, setNasaInfo] = useState();

  // All functions here

  useEffect(() => {
    axios.get(nasaData)
    .then(response => {
      console.log(response);
      console.log(response.data);

        setNasaInfo(response.data);
      })
      .catch(error => {
        
      })
  }, []);
console.log(nasaInfo);

  if (nasaInfo) {
    return (
      <div className="App">
        <div>
          <h1>{nasaInfo.title}</h1>
        </div>
        <div>
          <h3>{nasaInfo.date}</h3>
        </div>
        <div>
          <img src={nasaInfo.url}></img>
        </div>
        <div>
          <h2>Description</h2>
          <p>{nasaInfo.explanation}</p>
        </div>
        <footer>
          <p>{nasaInfo.copyright}</p>
        </footer>
      </div>
    )
  } else {
    return null;
  }
}

export default App;
