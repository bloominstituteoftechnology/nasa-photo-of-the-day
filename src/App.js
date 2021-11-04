import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import {API_KEY, BASE_URL} from './Constants/index'
import Image from "./components/image";
export default function App() {

  const [nasaData, setNasaData] = useState();
  const [image, setImage] = useState();
  
  useEffect(() => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
        .then(res => {
          setNasaData(res.data);
        console.log(res.data);
        setImage(nasaData.hdurl);
        })
        .catch(err => {
          console.log(err)
        })
   
    }, [])

function App() {
  return (
    <div className="App">
      <p> Picture of the Day</p>
      <Image image={image} setImage={setImage}/>
    </div>
  );
}

}


  