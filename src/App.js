import React, {useState, useEffect} from "react";
import axios from 'axios'
import "./App.css";
import "./rover.js"

function App(){
  const[photo, setPhoto] = useState({})

  useEffect(() =>{
    const fetchImage = () =>{
      axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res=>{
        setPhoto(res.data)
      })
      .catch(err=>{

      })
    }
    fetchImage()
  },[] )



  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build y <span role="img" aria-label='go!'>🚀</span>!
        <img src={photo.url}/>
      </p>
    </div>
  );
}


export default App;
