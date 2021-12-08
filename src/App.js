import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";
import Body from './Body.js';

function App() {
const [nasaData, setNasaData] = useState('')


  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=bFnzGs0ui4bTcLqSA3DQgV9IHgadFW0AKLeGVsOL')
    .then(res => {
      setNasaData(res.data)
    })
    .catch(res => {
      console.log(res.data)
    })

  },[])

  return (
    <div className="App">
      <p>
       NASA app!<span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Body nasaAPI = {nasaData} />
    </div>
  );
}

export default App;