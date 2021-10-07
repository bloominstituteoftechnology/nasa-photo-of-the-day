import React, {useState, useEffect} from "react";
import axios from 'axios';
import { BASE_URL, API_KEY, KEY_CONNECT } from "./getAPOD";
import "./App.css";



function App() {
  const [nasaData, setNasaData] = useState([])
  //const [imgDisplay, setImgDisplay] = useState(null)
useEffect(()=> {
  axios.get(`${BASE_URL}${KEY_CONNECT}${API_KEY}`)
    .then(res => {
      console.log(res.data)
      setNasaData(res.data);
    }).catch(err =>{
      console.log(err)
    })
},[])

  return (
    <div className="App">
    <h1>{nasaData.title}</h1>
    <p>{nasaData.date}</p>
    <div className='body'>
      <img src={nasaData.url} alt={'Nebula'}/>
    </div>
    <p>{nasaData.explanation}</p>
    </div>
    
  );
}

export default App;
