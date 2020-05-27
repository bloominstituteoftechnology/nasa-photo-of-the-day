import React, { useEffect,useState }from "react";
import NasaCards from "./components/nasaCards"
import "./App.css";
import Axios from "axios"

function App() {
  const [nasaData,SetNasaData] = useState([])

useEffect(()=>{Axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
.then(resp => SetNasaData(resp.data))
.catch(err=>{console.log('error', err)})}
,[]);


  return (
    <div className="App">
      <h1 className="App-header">NASA picture of the day</h1>
      <NasaCards nasaInfo={nasaData}/>      
    </div>
  );
}

export default App;
