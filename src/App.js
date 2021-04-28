import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Header from './components/header.js';
import PhotoOfTheDay from './components/photo.js';
import Description from './components/description.js'
import { MainDiv } from './styledComponents/styledComponents.js'

function App() {
  const [info, setInfo] = useState({});

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=CdHyQxi1LRypYhcylpY8l4j6mb6MwXepG8kMm4gm')
    .then(({data}) => {
      setInfo(data)
    })
    .catch(err => console.log('failed'));
  }, []);

  if (!info.url) {
    return (
      <h1>Loading...</h1>
    );
  }else return (

    <MainDiv className="App">
      <Header props={info}/>
      <PhotoOfTheDay props={info} />
      <Description props={info} />
    </MainDiv>
  );
}

export default App;
