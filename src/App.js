import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import NasaCard from "./Components/NasaCard";
// import { useEffect } from "react/cjs/react.development";

function App() {
  const [nasaData, setNasaData] = useState(null);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY ')
    .then(res => {
      setNasaData(res.data);
    }).catch(err => console.error(err));
  }, [])
  return (
    <div className="App">
      { nasaData && <NasaCard data={nasaData} />}
    </div>
  );
}

export default App;
