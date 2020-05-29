import React, { useEffect,useState }from "react";
import NasaCards from "./components/nasaCards";

import Axios from "axios"

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
