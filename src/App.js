import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';
import Header from './Header'
//import Button from './Button'
import Body from './Body'
import styled from "styled-components";

import Footer from './Footer'

const Div = styled.div`
background: #03071e;
margin-bottom: 0;
`


function App() {

  const [data, setData] = useState([]);
  
  
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=eTrXJWNJbEO2imxXzXwu0tfUeX9iMsUo4FdjjYby')
    .then(res => {
    console.log(res.data);
    setData(res.data);
    })
    .catch(err => {
      console.error(err);
    })
  }, [])
  return (
    <div className="App">
      <Div>
      <Header date={data.date} photo={data.url} title={data.title}/>
      <Body title={data.title} explanation={data.explanation}/>
      </Div>
      <Footer copyright={data.copyright}/>
    </div>
  );
}

export default App;
