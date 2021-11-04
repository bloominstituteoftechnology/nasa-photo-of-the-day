import React, {useState,useEffect} from "react";
import "./App.css";
import axios from 'axios';

import NasaCard from './Components/NasaCard';

//WSuGWUvpsGgHCWOhxmXoCxGrGufqm6zVfAfSZeVx
//key
//https://api.nasa.gov/planetary/apod
//URL
//I swear this better still work!

function App() {

  const [nasaData,setNasaData] = useState(null); //initialize to null

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
    // console.log(res);
    setNasaData(res.data);
    }).catch(err=>{
      console.error(err);
    })
  },[]) //empty array tells js 'mount this on first load'
  //currently it is a dummy api - we will use a real one soon
  

  return (
    <div className="App">
     {nasaData && <NasaCard data={nasaData} />}
    </div>
  );
}

export default App;
