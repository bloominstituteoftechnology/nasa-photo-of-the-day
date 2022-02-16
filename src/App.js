import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import BodyBuild from './Body'

console.log('https://api.nasa.gov/planetary/apod?api_key=CP9ybXLIceXiyidiZgPDegKVLsL4iMscgj07zGoL')
 
function App() {
   const [ image, setImage] = useState(null);
  const [txt, setTxt] = useState (null)


useEffect(() => {
  axios.get(`https://api.nasa.gov/planetary/apod?api_key=CP9ybXLIceXiyidiZgPDegKVLsL4iMscgj07zGoL`)
  .then(resp => {
    console.log(resp)
  })
  .catch(err => console.error(err))
}, [])

  return (
    <div className="App">
      <h1> EVERYONE NEEDS SPACE TO GROW </h1>
      {<BodyBuild/>}
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
