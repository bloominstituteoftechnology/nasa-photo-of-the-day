import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";

// import the children components
import Main from './components/Main';
import Sidebar from './components/Sidebar';

//import axios key
import { BASE_URL, API_KEY} from './components/Constents';

function App() {
  const [ nasaTitle, setNasaTitle ] = useState(null);
  const [ nasaDate, setNasaDate ] = useState(null);
  const [ nasaImg, setNasaImg ] = useState(null);
  const [ nasaExp, setNasaExp] = useState(null);
  const [ nasaCopyright, setNasaCopyright ] = useState(null);


  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
        setNasaTitle(res.data.title);
        setNasaDate(res.data.date);
        setNasaImg(res.data.hdurl);
        setNasaExp(res.data.explanation);
        setNasaCopyright(res.data.copyright);
      })
      .catch(err => {
        console.error(err);
      })
  }, []);

  return (
    <div className="App">
      <Main nasaImg={nasaImg} nasaExp={nasaExp} nasaCopyright={nasaCopyright} />
      <Sidebar nasaTitle={nasaTitle} nasaDate={nasaDate} />

    </div>
  );
}

export default App;
