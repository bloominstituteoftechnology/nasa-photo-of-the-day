import React, { useState, useEffect } from "react";
import "./App.css";
import Images from './images/Images';
import Axios from "axios";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get('https://api.nasa.gov/planetary/apod?api_key=t14m2JW1Ga7UKDuT1mksMGcLeRKYSX8lojAiQtAD')
      .then(Response => {
        console.log('from App file', Response);
        setData(Response.data);
        console.log('from setData', data);
      })

  }, [])

  return (
    <div className="App">
      <h1 className='App-header'>{data.title}</h1>
      <Images img={data} />
    </div>
  );
}

export default App;
