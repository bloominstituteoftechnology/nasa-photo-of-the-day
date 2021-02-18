import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import TimeTravel from './Components/TimeTravel.js'

function App() {
  
  const baseUrl = 'https://api.nasa.gov/planetary/apod?api_key=UAznML7VzzxW9Uax4B6JloejqZNEpB0daySt1Usp'
  const toGetDate = '&date='
  const [tdate, setTdate] = useState(theDate());
  const [summary, setSummary] = useState('')
  const [video, setVideo] = useState('')
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const getData = () => {
    
    axios.get(`${baseUrl}${toGetDate}${tdate}`)
    .then((res) => {
        console.log(res.data)
        setSummary(res.data.explanation)
        setVideo(res.data.media_type === 'video' ? res.data.url : undefined)
        setTitle(res.data.title)
        setImage(res.data.url)
        console.log(image)
    }).catch(err => {
    console.log(err)
    })

  } 

  
  useEffect(getData,[tdate])  

  function theDate(){
    const today = new Date();
    today.setDate(today.getDate() - 1)
    return today.toISOString().slice(0,10);
  } 
  console.log(theDate())
  
  
  function past() {
    const yesterday = new Date(tdate)
    yesterday.setDate(yesterday.getDate() - 1)
    setTdate(yesterday.toISOString().slice(0,10))
    console.log(tdate)

  }

  function present() {
    setTdate(theDate())
  }

  function future() {
    const tomorrow = new Date(tdate)
    tomorrow.setDate(tomorrow.getDate() + 1)  
    return setTdate(tomorrow.toISOString().slice(0,10))
  }



  return (
    <div className="App">
      <TimeTravel tdate = {tdate} past = {past} present = {present} future = {future} baseUrl = {baseUrl} toGetDate = {toGetDate} summary = {summary} video = {video} title = {title} image = {image} />
    </div>
  );
}

export default App;
