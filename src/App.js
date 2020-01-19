import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [todaysImage, setTodaysImage] = useState({});

  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then((res) => {
        console.log(res.data);
        setTodaysImage(res.data);
      })
      .catch((err) => console.log(err));
  }, [apiKey]);

  return (
    <div className="App">
      <h1>{todaysImage.title}</h1>
      <h3>by</h3>
      <h2>{todaysImage.copyright}</h2>
      <p>{todaysImage.explanation}</p>
      <img src={todaysImage.url} alt={todaysImage.title} />
    </div>
  );
}

export default App;
