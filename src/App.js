import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import NasaTitle from './Components/Title'
import NasaInfo from './Components/Info'
import NasaImage from './Components/Image'

function App() {
  const [nasa, setNasa] = useState({})
  useEffect(
    () => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`).then((response)=>{
        setNasa(response.data)
        console.log(response)
      }).catch((error)=>{console.log(error)})
    },[])

  return (
    <div className="App">
      <span>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </span>
      <NasaTitle title = {nasa.title}/>
      <NasaImage image = {nasa.hdurl}/>
      <NasaInfo info = {nasa.explanation}/>

    </div>
  );
}
export default App;