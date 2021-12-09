import React, {useState, useEffect} from "react";
import axios from 'axios'
import "./App.css";
import Photo from './components/Photo'
import Title from './components/Title'
import Information from "./components/Information";


function App() {
  const [photoOfTheDay, setPhoto] = useState([])


useEffect( () => {
  const fetchPhoto = () => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=O9CM4uImEaPjNABgx3aiwZTfUzeoWy1xjhPzPDoP`)
    .then(resp => {
      console.log(resp.data)
      setPhoto(resp.data)
    })
    .catch( err => {
      setPhoto(err)
    })
  }

fetchPhoto()

},[])

  return (
    <div className = "container">
      
        <Title photo={photoOfTheDay}/> 
        <Photo photo={photoOfTheDay}  /> 
        <Information photo={photoOfTheDay} />

        {/**
         * const props = {
         *   leila: photoOfTheDay,
         * 
         * }
         */}
        
    </div>
  )
}

export default App;
