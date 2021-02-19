import "./App.css";
import React, {useState, useEffect } from 'react';
import axios from 'axios';
import Pic from './components/Pic.js';



function App() {
  const [image, setImage] = useState([]);
  useEffect(() => {
    const nasaAPI = axios.get('https://api.nasa.gov/planetary/apod').then(res => {
      console.log(res);
    }
    },
    
  }, [])
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
