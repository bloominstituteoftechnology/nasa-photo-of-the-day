import React, { useState } from "react";
import "./App.css";
import axios from 'axios';
import PhotoCard from '../src/components/PhotoCard.js';

function App() {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [explanation, setExplanation] = useState('');
  axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => {
      console.log(response.data);
      setTitle(response.data.title);
      setUrl(response.data.url);
      setExplanation(response.data.explanation);
    });


  return (
    <div className="App">
      <p>
        This is the NASA Photo of the Day Page...
      </p>
      <PhotoCard title={title} url={url} explanation={explanation} />
    </div>
  );
}

export default App;
