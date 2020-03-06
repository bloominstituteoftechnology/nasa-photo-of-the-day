import React, { useEffect, useState } from 'react';
import "./App.css";
import axios from 'axios';
import NasaTitle from './components/Title'
import NasaInfo from './components/Info'
import NasaImage from './components/Image'

function App() {
  const [nasa, setNasa] = useState({})
  useEffect(
    () => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`).then((response)=>{
        setNasa(response.data)
        console.log(nasa)
      }).catch((error)=>{console.log(error)})
    },[])

  return (
    <div className="App">
      <NasaTitle title = {nasa.title} info = {nasa.explanation}/>
      <NasaImage image = {nasa.hdurl}/>
      {/* <NasaInfo info = {nasa.explanation}/> */}

    </div>
  );
}

export default App;
