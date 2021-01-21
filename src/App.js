import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios"
import APOD from './APOD'


const URL = 'https://api.nasa.gov/planetary/'
const API_KEY = 'DEMO_KEY'


function App() {
  const [pics, setPic] = useState([]);


  useEffect(() => {
    axios
      .get(`${URL}apod?api_key=${API_KEY}`)
      .then(res => {
        setPic(res.data);
        console.log(res.data)
      })
      .catch(err => {
        console.log(`ERROR: ${err}`)
      })
    
    
  }, [])


  return (
    <div className="App">
      <APOD title={pics.title} url= {pics.url} explanation= {pics.explanation} date= {pics.date} media= {pics.media_type}/>
    </div>
  );
}

export default App;
