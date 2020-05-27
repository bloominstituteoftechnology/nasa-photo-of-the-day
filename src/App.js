import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get('https://api.nasa.gov/planetary/apod?api_key=t14m2JW1Ga7UKDuT1mksMGcLeRKYSX8lojAiQtAD')
      .then(Response => {
        console.log('from App file', Response)
      })
  }, [])
  return (
    <div className="App">

    </div>
  );
}

export default App;
