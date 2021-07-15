import React, {useState, useEffect} from "react";
import "./App.css";

import NasaPhoto  from "./components/nasaPhoto";
import axios from 'axios'

function App() {

const [nasaData, setNasaData] = useState('')

setNasaData(null)


useEffect(() => {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(res =>{
    console.log(res.data)
    setNasaData(res.data)
  })
  .catch(err => console.log(err))
}, [])


  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <NasaPhoto nasaData ={nasaData}/>
    </div>
    
  )
}

export default App;
