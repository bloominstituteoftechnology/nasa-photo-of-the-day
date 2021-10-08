import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';
import { BASE_URL, API_KEY } from './constants';
import Explanation from "./Explanation";
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components'

function App() {
  const [nasaData, setNasaData] = useState([]);
  // ? const [photo, setPhoto] = useState('URL');

useEffect (() => {
  function getData() {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`) 
      .then(res => {
        setNasaData(res.data);
        // console.log(nasaData);
        return setNasaData(res.data);
      })
      .catch(err => {
        console.error(err)
      })
    } getData()
  }, [])

  return (
    <div className="App">
      <Header date={nasaData.date} />
      {/* ! <Article /> */}
      <Explanation  explanation={`${nasaData.explanation}`} />
      <Footer copyright={nasaData.copyright}/>
      <p>
        <h1>NASA's Astronomy Image of the Day</h1>
        <img src = {`${nasaData.url}`} alt='space shit'/>
      </p>
    </div>
  );
}

export default App;
