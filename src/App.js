import React, {useState, useEffect} from "react";
import "./App.css";
import Image from './components/Image';
import axios from 'axios';
import styled from 'styled-components';

function App() {
  const [data, setData] = useState('');
  
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then (res => {
      console.log(res);
      setData(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  },[]);

  return (
    <div >
      <Image data = {data} />
    </div>
  );
}

export default App;
