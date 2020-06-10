import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'

function App() {
  // const apikey = "bAcLUqRaRZ8eAxrG9b4TBiz6d1agngrqFTegqQZz"
  const[details, setDetails]=useState([])

  useEffect(() => {
    console.log("first render")
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=bAcLUqRaRZ8eAxrG9b4TBiz6d1agngrqFTegqQZz`)
    .then(response => {
      console.log(response.data)
      setDetails(response.data)

    })
    .catch(error =>{
      console.log(error)
    })
    
  },[] )

  function Photo(props){
    const {details} =props
    
    return(
     
    <div>
      <h1>{props.details.title}</h1>
      
      <img src = {props.details.url}></img>
      <p>{props.details.explanation}</p>
    <p>{props.details.date}</p>
    <p>copyright: {props.details.copyright}</p>
    </div>
  
  
    )
  }

  return (

    <div className="App">
  
      <Photo details  = {details} />
      
    </div>
  );
}

export default App;
