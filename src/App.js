import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Description from "./description";


function App() {

  
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        setData(res.data);
       
      }).catch(err => {
        console.error(err);
      })
  }, [])

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Description/>
    </div>
  );
}

export default App;
