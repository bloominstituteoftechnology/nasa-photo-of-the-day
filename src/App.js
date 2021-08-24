import React, {useEffect, useState} from "react";
import "./App.css";
import axios from 'axios';

function App() {
  const [info, setInfo] = useState([])


  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=kw4li6koQpnaZzFVA75n8NeQFl2B38hxVNrMCSLy')
    .then((response) => {
      setInfo(response.data);
    })
    .catch((error) => {
      console.log(error)
    });
  }, []);

  return (
    <div className="App">
      <h1>OUTLANDIA</h1>
      <div className="picDiv">
        <div className="picPic">
          <img className="pic" src={info.hdurl} alt="nasa of the day"></img>
        </div>
      </div>
      <h2>{info.title}</h2>
      <p> {info.explanation} </p>
      {/*  */}
    </div>
  );
}

export default App;
