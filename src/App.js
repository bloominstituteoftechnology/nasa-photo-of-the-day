import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios' 


function App() {
  handleClick = () => {
   console.log('clicked')
  };
  const [photoData, setPhotodata] = useState(null);
  useEffect(() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=EYpMqg3J4DtJJuJfOR7VyJDVWOY3O6kq1iGlRtV5')
    .then((res) =>{
      setPhotodata(res.data)
    })
    .catch((err) =>{ 
      console.log(err)
    });
  },[])
  if(!photoData) return <div><h1>Loading....⏳⏳⏳</h1></div>;

  return (
    <div className="App">
      <h1>{photoData.title}</h1>
      <img src={photoData.hdurl} alt="potd" />
      <p>{photoData.explanation}</p>
      <button onClick={handleClick}>Get todays photo!!</button>
    </div>
  );
}

export default App;
