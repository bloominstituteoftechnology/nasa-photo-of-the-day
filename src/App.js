import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";

// import the children components
import Main from "./Components/Main";
import Sidebar from "./Components/Sidebar";

//import axios key
// import { BASE_URL, API_KEY } from './Components/Keys';
const { REACT_APP_BASE_URL, REACT_APP_API_KEY } = process.env;

function App() {
  // const [ nasaTitle, setNasaTitle ] = useState(null);
  // const [ nasaDate, setNasaDate ] = useState(null);
  // const [ nasaImg, setNasaImg ] = useState(null);
  // const [ nasaExp, setNasaExp] = useState(null);
  // const [ nasaCopyright, setNasaCopyright ] = useState(null);

  const [ nasaData, setNasaData ] = useState({});


  useEffect(() => {
    axios.get(`${REACT_APP_BASE_URL}?api_key=${REACT_APP_API_KEY}`)
      .then(res => {
        // setNasaTitle(res.data.title);
        // setNasaDate(res.data.date);
        // setNasaImg(res.data.hdurl);
        // setNasaExp(res.data.explanation);
        // setNasaCopyright(res.data.copyright);
        setNasaData(res.data);
      })
      .catch(err => {
        console.error(err);
      })
  }, []);

  return (
    <div className="App">
      <Main nasaImg={nasaData.hdurl} nasaExp={nasaData.explanation} nasaCopyright={nasaData.copyright} />
      <Sidebar nasaTitle={nasaData.title} nasaDate={nasaData.date} />
      

    </div>
  );
}

export default App;
