import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Card from "./Components/Card"

export default function App() {
  const [nasaImgInfo, setNasaImgInfo] = useState('');

  useEffect(() =>{
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=olJARZdNKXDQXwHK1fGcAUdrkcGoCTlfrkYyjKDt`)
      .then(res => setNasaImgInfo(res.data))
      .catch(err => console.log(err))
  }, []);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Card imgInfo = {nasaImgInfo} />
    </div>
  );
}
