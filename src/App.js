import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import {API_KEY, BASE_URL} from './Constants'

export default function App() {

  const [nasaData, setNasaData] = useState();

  useEffect(() => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
        .then(res => {
          setNsaData(res.data);
        
        })
        .catch(err => {
          console.log(err)
        })
   
    }, [])

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;

}


  