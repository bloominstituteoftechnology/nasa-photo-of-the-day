import React, {useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { getDefaultWatermarks } from "istanbul-lib-report";

export const API_KEY = 'V3bbTMbJ7Y9GIaTbY3RnXPdVbuer4cdaMnI3XBDt';
export const BASE_URL = 'https://api.nasa.gov/planetary/apod?';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = () => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=V3bbTMbJ7Y9GIaTbY3RnXPdVbuer4cdaMnI3XBDt')
      .then(res => {
        console.log(res)
        setData(res.data)


           })

             .catch(error =>{
               console.log(error)
             })


    }
    getData()
  }, [])
  return (
    <div className="App">
      <p>This right here is Nasa's photo of the day! Enjoy!!!</p>
      <p>{data.title}</p>
      <p>{data.date}</p>
      <p>{data.explanation}</p>
      <img src={data.url} alt="space stuff"/>
    </div>
  );
}

export default App;
