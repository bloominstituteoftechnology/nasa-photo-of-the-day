
import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";
import Component1 from './Component1.js';

function App() {
const [nasaData, setNasaData] = useState('')


  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=aqCLHCWG0DstgzbaBmqygK6afz9raTDXkwBdBL7u')
    .then(res => {
      setNasaData(res.data)
    })
    .catch(res => {
      console.log(res.data)
    })

  },[])

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Component1 nasaAPI = {nasaData} />
    </div>
  );
}

export default App;
