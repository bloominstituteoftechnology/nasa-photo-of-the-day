import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Description from "./Description";
import Image from "./Image";
import Button from "./Button"

function App() {

  
  const [data, setData] = useState([])

  // https://api.nasa.gov/planetary/apod?api_key=eZ9SoGT9vzhRWxb96gplCe8kADvwAfuKbtVaVnRj
  // https://api.nasa.gov/planetary/apod?api_key=WZW4y7Tt3gRhfUUFBWb6ml29HpVbuL30dFinJ7rV

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=WZW4y7Tt3gRhfUUFBWb6ml29HpVbuL30dFinJ7rV')
      .then(res => {
        setData(res.data);
      //  console.log(res.data);
      }).catch(err => {
        console.error(err);
      })
  }, [])

console.log(data)


  return (
    <div className="App">
      <h1>NASA Photo of the Day!</h1>
      <Description data={data}/>
      <p>The photo was taken on {data.date}</p>
      <Button data={data} className='off'/>
      <Image data={data}/>
    </div>
  );
}

export default App;
