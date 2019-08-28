import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import PhotoCard from '../src/components/PhotoCard.js';

function App() {
const [data, setData] = useState({});

  {/*
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [explanation, setExplanation] = useState('');
    
      original methods converted */}
{/* const [photos, setPhotos] = useState([]); */}
useEffect(() => { 
  axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => {
      console.log(response.data);
      {/*setTitle(response.data.title);
      setUrl(response.data.url);
      setExplanation(response.data.explanation); SONCERTING TO setDATA for DRY code 
        set to one response
      setPhotos(response.data) MAP*/}
      setData(response.data);
  });
}, []);

  return (
    <div className="App">
      <p>
        This is the NASA Photo of the Day Page...
      </p>
      {/*<PhotoCard title={title} url={url} explanation={explanation} /> single function and single return w useEffect above! */}
      <PhotoCard title={data.title} url={data.url} explanation={data.explanation} date={data.date} /> 
      {/* photos && photos.map(data => (
      <PhotoCard title={data.title} url={data.url} explanation={data.explanation} date={data.date} /> */}
      ))}
    </div>
  );
}

export default App;
