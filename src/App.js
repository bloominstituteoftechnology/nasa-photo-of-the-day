import React, {useEffect, useState} from "react";
import "./App.css";
import Photo from "./photo";
import axios from 'axios'
function App() {
  const [photoOfTheDay, setPhotoOfTheDay] = useState('')  

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(res => {
        setPhotoOfTheDay(res.data)
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    },[])
  
  
  

  return (
    <div className="App">
      <p>
       </p>
    <Photo photo = {photoOfTheDay}/>
    </div>
  );
}

export default App;


// Read through the instructions in the README.md file to build your NASA
// app! Have fun <span role="img" aria-label='go!'>🚀</span>!