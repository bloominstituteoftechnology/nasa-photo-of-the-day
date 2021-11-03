import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';





function App() {
  const [nasaData, setNasaData] = useState([]);

  useEffect( () => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=zlhkIYRiAKf30NlhMCjKJrVKelcdAfwJhD3N2ec1`)
    .then(res => {
      setNasaData(res)
      console.log(nasaData)
    })
    .catch(error => {
      console.log(error)
    
  }, [])

})


  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    
      })
    </div>
  );
}

export default App;
