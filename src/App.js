import React, { useState, useEffect } from "react";
import "./App.css";
import Image from './Componants/Image';
import Axios from 'axios';


function App() {
 
  const [image, setImage] = useState([])
  
    useEffect(() => {
      Axios.get(`https://api.nasa.gov/planetary/apod?api_key=wr1FnyMD07lhC4XB4sKEiOswUq9KJKj38egON2FE`)
      .then(response => {
          setImage(response.data) 
        })
      .catch(err=> {
        console.log("error in the api call")
      })
      }, [])
  
  return (
  
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      <Image picture={image}   />
    </div>
  );
}

export default App;
