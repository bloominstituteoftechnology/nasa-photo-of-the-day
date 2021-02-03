import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  // const [title, setTitle] = useState("");
  // const [explanation, setExplanation] = useState("");
  // const [url, setUrl] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=ue1vG6b3OZGEq6IEFNO4UimHRrjVhtieKcV2CHex')
    .then((result) => {
      setData(result.data);
    }).catch((err) => {
      console.log('Error')
    }, []);

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