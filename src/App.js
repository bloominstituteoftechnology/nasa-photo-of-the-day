import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {

  const [pic, setPic] = useState([])

  useEffect(() => {
    console.log('making request')
    axios.get('https://api.nasa.gov/planetary/apod?api_key=adten6nWHl8f7NxrLJZIuKHCpDjxzTRaKfp74QVE')
      .then(response => setPic(response.data))
      .catch(err => console.log(err))
  }, [])



  return (
    <div className="App">
      {
        pic.map(pics => {
          return pics.url
        })
      }
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );



}

export default App;
