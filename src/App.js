import React, { useEffect, useState} from "react";
import "./App.css";
import axios from 'axios';
import  { BASE_URL, API_KEY } from './constants/index';
import Title from './components/Title.js';
import Img from './components/Img.js';
import Copyright from "./components/Copyright";
import Date from "./components/Date";
import Explanation from "./components/Explanation";
import Version from "./components/Version.js";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
h1{
  font-family: ${pr => pr.theme.fontFamily};
}
`





function App() {

  const[nasaData, setNasaData]= useState({});


useEffect(() =>{
  axios.get(`${BASE_URL}${API_KEY}`)
  .then(res => {
    console.log(res);
    setNasaData(res.data)
  }).catch(err =>{
    console.error()
  })
}, [])

  return (
    <div className="App">
      <GlobalStyle/>
      <Title className="title"  title ={nasaData.title}/>
      <div className="img-container">
        <Img className="img" img={nasaData.url}/>
      </div>

      <div className='info-container'> 
        <Copyright className="copyright"  copyright={nasaData.copyright}/>
        <Date  className="date" date={nasaData.date} />
        <Explanation className="explanation" explanation={nasaData.explanation}/>
        <Version version={nasaData["service_version"]}/>

     </div>

      
    </div>
  );
}

export default App;

