import React, {useState, useEffect} from "react";
import "./App.css";
import APOD from "./APOD"
import Header from "./Components/Header/header"
import Imagecon from "./Components/Imagecon/imagecon"
import { API_KEY, APOD_URL, EPIC_URL } from "./Constants/index"
import axios from "axios";


 function App() {

  const [epic, setEpic] = useState([])
  const [apod, setApod] = useState({})
  
  useEffect( () => {

    axios.get(`${APOD_URL}?api_key=${API_KEY}`)
    .then((res) => {
      setApod(res.data)
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [] )

  useEffect( () => {
    axios.get(`${EPIC_URL}?api_key=${API_KEY}`)
    .then((res) => {
      setEpic(res.data)
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [] )

  
  return (
    
    <div className="App">
      {/* We are going to render three things here, header, APOD, and 
      imagecon */}
      <Header />
      <APOD apod={apod} />
      {
      epic.map(ep => {
        return <Imagecon arr={ep} />
      })
      
      }  
    </div>

  );
}

export default App;
