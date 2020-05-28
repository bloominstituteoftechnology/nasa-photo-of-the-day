import React, { useState, useEffect } from "react";
import "./App.css";
import Images from './images/Images';
import Axios from "axios";
// import Button from './Button';

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
  // useEffect(() => {
  //   Axios.get('https://api.nasa.gov/planetary/apod?api_key=mHGVbdKVXrquyz5wsMjkiKgHsQlCv7pTVEo9pjgx')
  //     .then(Response => setData(Response.data))
  //     .catch(err => console.log('axios call app', err))
  // }, [])
  // if (!data.data) return <h3>Loading...</h3>;
  return (
    <div className="App">
      <h1 className='App-header'>{data.title}</h1>
      <Images img={data} />
      <button className='btn'>This Month's Archive</button>
    </div>
  );
}

export default App;
