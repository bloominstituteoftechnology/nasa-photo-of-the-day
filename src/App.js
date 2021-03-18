import React, { useState, useEffect } from "react";
import "./App.css";
import axios from"axios"
import Photo from"./photo"

function App() {
  const [details, setDetails] = useState([])

  useEffect(()=> {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=NBcGHZZgey82OChKxtEQgJ6UFP6ps8VeXWXKycec')
    .then(res => {
      setDetails(res.data)
      console.log(res.data)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])
  return (
    <div className="App">
      <div className="imgPara">
        <Photo help={details}/>
      </div>
      
    </div>
  
  );
}

export default App;

