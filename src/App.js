import React, { useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Header from './components/Header.js';
import Body from './components/Body.js';
import { useState } from 'react'; 

function App() {
  const [data, setData] = useState([])
  useEffect(()=>{
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=0MUalKr9xO8febRmc1SW0aVUCYnUNBCDcmW9wp6w')
    .then(res =>{
      setData(res.data);
      console.log(res.data)
      })
    .catch(err =>{
      console.log(err)
    })
  },[])
  return (
    <div className="App">
      <Header  data ={data}/>
      <Body data ={data}/>
      {/* <Images nasaImage = {data}> </Images> */}
      {/* <Images data = {data}/> */}
    </div>
  );
}



export default App;




