import React, { useEffect,useState }from "react";
import NasaCards from "./components/nasaCards"
import "./App.css";
import Axios from "axios"
import styled from "styled-components"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [nasaData,SetNasaData] = useState([])

useEffect(()=>{Axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
.then(resp => SetNasaData(resp.data))
.catch(err=>{console.log('error', err)})}
,[]);


  return (
    <div>
      <NasaCards nasaInfo={nasaData}/>      
    </div>
  );
}

export default App;
