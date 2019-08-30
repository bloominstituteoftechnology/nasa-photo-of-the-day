import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import styled from 'styled-components';
import PhotoCard from '../src/components/PhotoCard.js';

      
const Button = styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid palevioletred;
color: palevioletred;
margin: 0 1em;
padding: 0.25em 1em;
`

function App() {

{/*const [data, setData] = useState({});*/}

  {/*
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [explanation, setExplanation] = useState('');
    
      original methods converted */}
let photoArr = [];

const [photos, setPhotos] = useState([]);

useEffect(() => {
  let dates = ['2019-08-15', '2019-08-27'];

dates.forEach(date => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
    .then(response => {
      console.log(response.data);
      console.log(photos);
      /*setTitle(response.data.title);
      setUrl(response.data.url);
      setExplanation(response.data.explanation); for DRY code 
      set to one response */
      /*setData(response.data);*/
      photoArr.push(response.data);
      setPhotos(photoArr);

    });
  }) 
/*  console.log(photoArr);
  setPhotos(photoArr); */
}, 
[]); 

console.log(photos);
  return (
    <div className="App">
      <p>
        This is the NASA Photo of the Day Page...
      </p>
      
      {/*<PhotoCard title={title} url={url} explanation={explanation} /> single function and single return w useEffect above! */}
      {/*<PhotoCard title={data.title} url={data.url} explanation={data.explanation} date={data.date} />*/} 

      {photos && photos.map(data => (
      <PhotoCard key={data.date} {...data} />
      ))}
      
      <Button>Button</Button>

      </div>
  );
}

export default App;
