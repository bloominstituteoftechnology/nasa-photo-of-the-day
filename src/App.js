import React, {useEffect, useState} from "react";
import axios from 'axios'; 
import * as API from './API'
import PodData from "./components/PodData.js"
import PodPicture from './components/PodPicture.js'
import "./App.css";
import DateSelect from "./components/DateSelect";
import SC from "styled-components";

const DarkTheme = SC.div`
text-align:center;
background-color:${props=>props.theme.background_color};
height:100vh;
overflow: hidden;
color:${props=>props.theme.text_color};
`

const MainTitle = SC.h1`
  font-size:${props=>props.theme.main_title_size};
`

const Container = SC.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 5%;
`

const formatDate = (date) => `${date.getFullYear()}-${("0" + (date.getMonth()+1)).slice(-2)}-${("0" + (date.getDate())).slice(-2)}`


function App() {
  const [currentDate,setCurrentDate] = useState(formatDate(new Date())); 
  const [nasaData,setNasaData] = useState(null); 
  const [loading,setIsLoading] = useState(true); 
  const  safeSetCurrentDate = (val)=> {
    val = new Date(val); 
    if(val.getDate() > new Date().getDate()) return; 
    setCurrentDate(formatDate(val)); 
  } 
  useEffect(()=>{
    axios.get(`${API.URL}?api_key=${API.KEY}${currentDate ? `&date=${currentDate}` :''}`).then((data)=>{
      setNasaData(data.data); 
      setIsLoading(false); 
    }).catch(err=>console.log(err))
  },[currentDate])

  return (
    <DarkTheme>
      <MainTitle> NASA: Picture of the Day </MainTitle>
      {loading && <h2>LOADING NASA'S PICTURE OF THE DAY!</h2>}
      {nasaData && 
      <Container>
        <PodPicture media_type={nasaData.media_type} media_src={nasaData.url} /> 
        <PodData title={nasaData.title} description={nasaData.explanation} date={nasaData.date} copyright={nasaData.copyright} tags={nasaData.concepts} /> 
      </Container>
      }
      {
      <div>
        <DateSelect currentDate={currentDate} setCurrentDate={safeSetCurrentDate} /> 
      </div> 
      }
    
    </DarkTheme>
  );
}

export default App;
