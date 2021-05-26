import React, {useEffect, useState} from "react";
import "./App.css";
import axios from 'axios';
import Header from './components/Header.js'
import Media from './components/Media'
import Content from './components/Content'

function App() {
  const [nasaMedia,setNasaMedia] = useState()
  const [nasaTitle, setNasaTitle] = useState()
  const [nasaDate, setNasaDate] = useState()
  const [nasaInfo, setNasaInfo] = useState()

  useEffect(() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=k9uiqyXabCjeeS16YCPHBE9RrLlKydWwA3f05vBY')
    .then(result => {
      setNasaMedia(result.data.hdurl)
      setNasaTitle(result.data.title)
      setNasaDate(result.data.date)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])
  return (
    <div className="App">
     <div classname = 'App-header'><Header /></div>
     <Media nasaMedia= {nasaMedia} />
     <Content title ={nasaTitle} date = {nasaDate} info = {nasaInfo} />
    </div>
  );
}

export default App;
