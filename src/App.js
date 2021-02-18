import React, {useState, useEffect} from "react";
import Axios from "axios";
import "./App.css";
import Title from "./Title";
import NasaPhoto from "./NasaPhoto";
import Instructions from "./Instructions";



function App() {
  const [nasaData, setNasaData] = useState([])

  useEffect (() => {
    const fetchNasaPhoto = () => {
      Axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        console.log(`this is working`, res)
        setNasaData(res.data)
      })
      .catch(err => {
        console.log(`${err}`)
        console.log('U GOT AN ERR')
    })
    }

    fetchNasaPhoto()

  }, [])


  return (
    <div className="App">
      <Title />
      <NasaPhoto data={nasaData}/>
      <Instructions />



      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
