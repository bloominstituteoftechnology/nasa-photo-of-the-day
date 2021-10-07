import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';


function App() {

  const [nasa, setNasa] = useState([]);

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=qXYnhDSG0waj3uWYCmaxNAhsF5ghT3Wf7o1fHiby")
     .then(res => {
       const nasaData = res.data;
       setNasa(nasaData);
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
    </div>
  );
}

export default App;
