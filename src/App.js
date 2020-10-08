import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import Info from './Info.js'
import Picture from './Picture.js'
import styled from 'styled-components'

const StyledH1 = styled.h1`

  color:pink;

  &:hover{
    transform: scale(1.25);
    transition: all 0.3s ease-in-out;
  }
`;

function App() {

const [info, setInfo] = useState([])


  useEffect(() => {
   const getAllData = () => { 
    axios.get('https://api.nasa.gov/planetary/apod?api_key=4gBi5apMtp8xXvdW1mAEJNduRmOuDrhXWdMBfzez')
    .then(res => {
      setInfo(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }
  getAllData()
}, [])


  return (
    <div className="App">
      <StyledH1>{info.title}</StyledH1>
  <Picture source={info.url}/>
    <Info copywrite={info.copyright} date={info.date} explanation={info.explanation}/> 
    </div>
  );
}

export default App;
