import React, {useState, useEffect} from "react";
import axios from 'axios';
import Header from './Components/Header';
import Body from './Components/Body';

import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then(res => {
      // console.log(res.data)
      setData(res.data);
    })
    .catch(err => {
      console.error(err);
    })
  }, [])


  return (
    <div className="App">
      <p> NASA Photo of the Day! <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Body nasaAPI ={nasaData}/>
    </div>
  );
}

export default App;
