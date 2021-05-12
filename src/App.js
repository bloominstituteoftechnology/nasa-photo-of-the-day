import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';
import Image from './Image';

function App() {
  
  const [nasaData, setNasaData] = useState(null);

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(function (response) {
        console.log('Response: ', response.data);
        setNasaData(response.data);
        console.log('nasaData1: ', nasaData);
      })
      .catch(function (error) {
        console.log('Error: ', error);
      })
  }, []);
  console.log('nasaData2: ', nasaData);

  return (
    <div className="App">
      <p>
        Image should display below this.
      </p>
      <Image src={nasaData.url} alt={nasaData.explanation} />
    </div>
  );
}

export default App;
 