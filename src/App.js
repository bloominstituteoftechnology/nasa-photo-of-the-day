import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';

import Video from './Components/Video.js';
import Header from './Components/Header.js';

function App() {

  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY').then(response => {
      setNasaData(response.data);
    });
  }, []);

  console.log(nasaData);

  return (
    <div className="App">
      <div className="top_content">
        <Header title={nasaData.title} date={nasaData.date} />
        <Video media_type={nasaData.media_type} src={nasaData.url} hdurl={nasaData.hdurl} />
      </div>
      <div className="bottom_content">
        <p className="explanation">
          {/* Read through the instructions in the README.md file to build your NASA app! Have fun 🚀! */}
          {nasaData.explanation};
      </p>
      </div>
    </div>
  );
}

export default App;
