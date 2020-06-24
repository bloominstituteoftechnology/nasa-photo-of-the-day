import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import styled from 'styled-components'

function App() {
  const[details, setDetails]=useState([])

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=bAcLUqRaRZ8eAxrG9b4TBiz6d1agngrqFTegqQZz`)
    .then(response => {
      setDetails(response.data)

    })
    .catch(error =>{
      console.log(error)
    })
    
  },[] )

  return (

    <div className="App">
      {console.log(details)}
      <Photo details  = {details} />
      
    </div>
  );
}

export default App;
