import React, { useState,useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Title from './components/Title';
import Card from './components/Card';

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
      <Title title={data.title} copyright={data.copyright}/>
      <Card image={data.hdurl} explanation={data.explanation} date={data.date}/>
    </div>
  );
}

export default App;
