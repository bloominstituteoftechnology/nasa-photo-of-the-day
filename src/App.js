import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import BigComponent from './component/component1'

function App () {
  const [nasaData, setNasaData] = useState('');

useEffect(() => {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=SXPtWibb2GeOr9STxLEQjXLsw71ok5E6bsCzi1KL')
  .then(res => {
    setNasaData(res.data)
    console.log(nasaData)
  })
  .catch(err => {
    console.error(err);
  })
}, [])

return(
    <div className="App">
      
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <BigComponent nasaAPI ={nasaData}></BigComponent>
    </div>
  );
}

export default App;
