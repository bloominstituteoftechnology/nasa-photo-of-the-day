import axios from "axios";
import React,{useEffect, useState} from "react";
import "./App.css";
import Header from './Components/Header';
import Main from './Components/Main';
import Info from './Components/Info';

function App() {

  const [nasaData, setNasaData] = useState([]);
  const url = 'https://api.nasa.gov/planetary/apod?api_key=';
  const apiKey = 'eoBltjB7Kaah29gM466ZyRIh5H3V2VI9GXDk9uJN';
  useEffect(() => {
    axios.get(`${url}${apiKey}`).then(res => {
      console.log(res.data);
      const photoData = res.data;
      setNasaData(photoData);
      console.log(nasaData)
    }).catch(err => {
      (console.error(err))
    })
  },[]);
  console.log(nasaData)
  return (
    <div className="App">
      <Header title={nasaData.title} link={nasaData.url}/>
      <Main image={nasaData.url} exp={nasaData.explanation}/>
      <Info exp={nasaData.explanation} author={nasaData.copyright} date={nasaData.date}/>
    </div>
  );
}

export default App;
