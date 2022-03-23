import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [spaceData, setSpaceData] = useState([]);
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=hm1ZzTejYicWaa4IGPQovdxqa9tuz4OKHU9o4kO0')
    .then (res => {
      setSpaceData(res.data);
    })
  }, [])

  return (
    <div className="App">
      <h1>
        I'm escaping to the one place that hasn't been corrupted by capitalism......
        S P A C E!</h1>
        <h1>{spaceData.title}</h1>
        <h4>{spaceData.explanation}</h4>
        <img src={spaceData.hdurl} width={200} height={200} alt="the bubble nebula"/>
      
      
    </div>
  );
}

export default App;
