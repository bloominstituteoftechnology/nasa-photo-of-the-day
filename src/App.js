import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import GetDate from './Header';
import desc from './imgFooter';
import GetDescription from "./imgFooter";


export const API_KEY = 'q15LIlf3Ltjx9gf81QlPn3DXbg7m4QzUCKfWf6L7';
export const URL = 'https://api.nasa.gov/planetary/apod?api_key=';

function App() {

const [image, setImage] = useState('');


useEffect(() => {
  axios.get(`${URL}${API_KEY}`)
  .then((res) => {
    setImage(res.data.hdurl)
  })
  .catch((err) => {
    console.log(err);
  }, [image])
})



  return (
    <div className="App">
      <GetDate />
      <img src={image} alt='of day'></img>
      <GetDescription />
    </div>
  );
}

export default App;
