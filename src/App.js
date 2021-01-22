import React, { useState, useEffect } from "react";
import styled, { keyframes } from 'styled-components';
import "./App.css";
import axios from 'axios'
import GetDate from './Header';
import desc from './imgFooter';
import GetDescription from "./imgFooter";
import { button, Card, CardBody, CardHeader } from 'reactstrap';
//import { Img } from './styles.js';


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
      <Img src={image} alt='of day'></Img>
      <GetDescription />
    </div>
  );
}
//styles - until exporting works!!
const kf = keyframes`
  100%{
    opacity: 1;
    transform: scale(1)
  }
`

const Img = styled.img`
    max-width: 60%;
    max-height: 50%fit-content;
    animation: ${kf} 5s ease-in-out forwards;
    box-shadow: inset 1 0 1px rgba(0,0,0,.8),
                inset 1 2px 0 rgba(255,255,255,.5),
                inset 1 -1px 0 rgba(0,0,0,.4);
    border-radius: 20px;
`






export default App;
