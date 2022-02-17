import React, {useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import BodyBuild from './Body'


 
function App() {
  const [copy, setCopy] = useState()
  


useEffect(() => {
  axios.get(`https://api.nasa.gov/planetary/apod?api_key=CP9ybXLIceXiyidiZgPDegKVLsL4iMscgj07zGoL`)
.then(resp => {
    // console.log(resp.data)
    setCopy(resp.data.copyright)
  })
})


  return (
    <div className="App">
      <h1> EVERYONE NEEDS SPACE TO GROW </h1>
      { <BodyBuild />}
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <h4>copyright:{copy}</h4>
    </div>
  

    
  );
}

export default App;
