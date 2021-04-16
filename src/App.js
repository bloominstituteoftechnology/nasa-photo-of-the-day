import React, {useState, useEffect} from "react";
import axios from 'axios'
import "./App.css";
import Picture from './Components/Picture'
import Body from './Components/Body'
import Card from './Components/Card'


function App() {
  const [nasaData, setNasaData] = useState([])
  useEffect(()=>  {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(res => {
    console.log(res)
    setNasaData(res.data)
  })
  .catch(err => {
    console.log(err)
  })
  }, [])
  return (
    <div className="App">
      <Picture image={nasaData.url} />
      <Card nasaData={nasaData}/>
    </div>
  );
}

export default App;
