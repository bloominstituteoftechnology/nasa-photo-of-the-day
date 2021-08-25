import React { useState, useEffect } from 'react';
import axios from 'axios'
import "./App.css";

const [data, setData] = useState([])

function App() {

  useEffect(() => {
    axios.get("http//WhateverAPIcallGoesHere")
     .then(response => {
       setData(response.data)
      const dataKeys = Object.keys(data)
     })
      .catch(error => {
       console.log(error)
      })

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
