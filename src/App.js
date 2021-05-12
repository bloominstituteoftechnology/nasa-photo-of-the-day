import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Header from './Components/head.js';
import Body from './Components/body.js';

function App() {
  const [nasaData, setNasaData] = useState([]);

  useEffect(()=> {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=MjOoXMh2ahiorGCM7YMmKlPo88UBehPSatVjdv8i")
    .then((res)=>{
      setNasaData(res.data);
      console.log(res.data);
    })
    .catch((err)=> {
      console.log(err);
    })
  }, [])
  return (
    <div className="App">
     <Header data={nasaData}/>
     <Body data={nasaData}/>
    </div>
  );
}

export default App;
