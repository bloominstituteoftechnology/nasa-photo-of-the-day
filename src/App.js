import React, { useState,useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Title from './components/Title';
import Image from './components/Image';

function App() {
  // const title = "My title";
  const [data, setData] = useState([]);

  useEffect(()=> {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14')
    .then(res =>{
      const data = res.data;
      setData(data);
    })
    .catch(err => {
      console.log(err);
    })
  },[])
  return (
    <div className="App">
      <h1>Nasa Photo of the Day</h1>
      <Title title={data.title}/>
      <Image image={data.url}/>
    </div>
  );
}

export default App;
