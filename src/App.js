import React, {useState, useEffect} from "react";
import "./App.css";
import Photo from './Photo'
import axios from 'axios'

function App() {
  const[details, setDetails]=useState([])

  useEffect(() => {
    console.log("first render")
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
