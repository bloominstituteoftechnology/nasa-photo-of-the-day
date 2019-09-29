import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';


function App() {
  const [nasaImg, setImg] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const nasaData = await axios.get('https://api.nasa.gov/planetary/apod?api_key=LNPoBywgSDLGE27u4IKuzb2ocXxz3peGPbtVxz44')
        console.log(nasaData);
        setImg(nasaData.data);
      }
      catch (err) {
        console.log(err);
      }
    }
    fetchData()
  }, [])
  console.log(nasaImg);
  return (
    <div className="App">
      <h1>The NASA picture of the day 🚀!</h1>
      <h2>{nasaImg.title}</h2>
      <h2>{nasaImg.date}</h2>
      <p>{nasaImg.explanation}</p>
      <img src={`${nasaImg.url}`} />
    </div>
  );
}

export default App;
