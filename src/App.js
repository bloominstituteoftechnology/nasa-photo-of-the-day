import React, {useState, useEffect} from "react";
import "./App.css";
import Picture from './Picture'
import Body from './Body'
import axios from 'axios'

function App() {
  const [nasaData, setNasaData] = useState([])
  
  useEffect(() => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=asy7YloHliKheX3kKzh4LYH6oMJL7Wkv4aYdvB9C')
      .then( res => {
        setNasaData(res.data)
      }).catch(err => {
        debugger
      })
  }, [])
  console.log(nasaData)
  return (
    <div className="App">
      <Picture data={nasaData}/>
      <Body data={nasaData}/>
    </div>
  );
}

export default App;
