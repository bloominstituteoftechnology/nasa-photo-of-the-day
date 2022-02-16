import React, {useEffect, useState} from "react";
import axios from 'axios'; 
import * as API from './API'
import PodData from "./components/PodData.js"
import PodPicture from './components/PodPicture.js'
import "./App.css";
import DateSelect from "./components/DateSelect";
const possibleTags = ['concept_tags','start_date','end_date','date']
const formatDate = (date) => `${date.getFullYear()}-${("0" + (date.getMonth()+1)).slice(-2)}-${("0" + (date.getDate())).slice(-2)}`
function App() {
  const [currentDate,setCurrentDate] = useState(formatDate(new Date())); 
 const [queryParams,setQueryParams] = useState('&concept_tags=true'); 
 const [nasaData,setNasaData] = useState(null); 
 const [loading,setIsLoading] = useState(true); 
 const  safeSetCurrentDate = (val)=> {
    val = new Date(val); 
    if(val.getDate() > new Date().getDate()) return; 
    setCurrentDate(formatDate(val)); 
  } 
  useEffect(()=>{
    axios.get(`${API.URL}?api_key=${API.KEY}${queryParams}${currentDate ? `&date=${currentDate}` :''}`).then((data)=>{
      setNasaData(data.data); 
      setIsLoading(false); 
    }).catch(err=>console.log(err))
  },[queryParams, currentDate])

  return (
    <div className="App">
      <h1> NASA: Picture of the Day </h1>
      {loading && <h2>LOADING NASA'S PICTURE OF THE DAY!</h2>}
      {nasaData && 
      <div className="container">
        <PodPicture cName="half-width" media_type={nasaData.media_type} media_src={nasaData.url} /> 
        <PodData cName={'half-width'} title={nasaData.title} description={nasaData.explanation} date={nasaData.date} copyright={nasaData.copyright} tags={nasaData.concepts} /> 
      </div>
      }
      {
      <div>
        <DateSelect currentDate={currentDate} setCurrentDate={safeSetCurrentDate} /> 
      </div> 
      }
    
    </div>
  );
}

export default App;
