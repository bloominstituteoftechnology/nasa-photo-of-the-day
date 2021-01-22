
import "./App.css";
import axios from "axios"
import React, {useEffect,useState} from "react"
import {Image} from "./image"




function App() {
  
  const [nasaData,setNasaData] = useState("")
  

  useEffect(() => {
    
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=leHoEfK9OcSztrGdehxyUGRHuuLHnFxfKypXslXg&date=2012-03-14`)
      .then((res) => {
      
       setNasaData(res.data)
      //  console.log(res.data)
        console.log(setNasaData)
      })
      .catch((err) => {
        // console.log(err);
      });
  

  ;
}, []);

  return (
    <div className="App">

      <Image nasaData = {nasaData} />
      
 
  </div> 
    
  )
}



export default App;
