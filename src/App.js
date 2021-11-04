import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import BigComponent from './component/component1'
import styled from 'styled-components';

const Spinner = styled.span `
  border: 10px solid white;
  animation: 3s rotate 3s;
`
const StyleBody = styled.body `
    background: #082636;
    padding: 10%;
    border: 20px #051923;
`

function App () {
  const [nasaData, setNasaData] = useState('');

useEffect(() => {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=SXPtWibb2GeOr9STxLEQjXLsw71ok5E6bsCzi1KL')
  .then(res => {
    setNasaData(res.data)
   
  })
  .catch(err => {
    console.error(err);
  })
}, [])

return(
  <StyleBody>
    <div className="App">
      <p>
       <Spinner role="img" aria-label='go!'>🚀</Spinner>
      </p>
      <BigComponent nasaAPI ={nasaData}/>
    </div>
    </StyleBody>
  );
}

export default App;
