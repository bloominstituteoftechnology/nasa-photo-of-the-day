import React, { useState,useEffect } from "react";
import "./App.css";
import axios from 'axios';
import { BASE_URL, API_KEY } from './constants'
import "./components/Navbar";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`${BASE_URL}/apod?api_key=${API_KEY}`)
    .then((res) => {
      // console.log(res.data);
      setData(res.data)
    })
    .catch(err => console.log(err))
  },[])

  return (
    <div className="App">
      
      <Navbar/>
      <Main img ={data.url} title= {data.title} content ={data.explanation}/>
     
    </div>
  );
}

export default App;
