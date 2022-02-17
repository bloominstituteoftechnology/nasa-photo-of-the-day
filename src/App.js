import React,{useState,useEffect} from "react";
import "./App.css";
//import axios
import axios from 'axios';
//import components
import {BASE_URL,API_KEY} from './constants';
import Explanation from "./components/Explanation";
import Title from "./components/Title";
import Content from "./components/Content";
import style,{keyframes} from 'styled-components';

const PageStyle = style.div`
  background-color:${pr=>pr.theme.backgroundColor};
`;

function App() {
  const[photos,setPhotos] = useState([]);
  const[explanationInfo,setExplanationInfo] = useState(false);
  const closeExplanation =info=>{
    setExplanationInfo(false);
    
  }
  const showExplanation = info=>{
    setExplanationInfo(true);
    
  }
  

  useEffect(()=>{
    axios.get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
    .then(res=>{
      setPhotos(res.data);
      
    })
    .catch(err=>{
      console.error(err);
    })
  },[]);


  return (
    <PageStyle className="App">
      <Title photos ={photos}/>
      <Content photos={photos}/>
      <Explanation close ={closeExplanation} show = {showExplanation} explanationInfo = {explanationInfo}/>
      
    </PageStyle>
  );
}

export default App;
