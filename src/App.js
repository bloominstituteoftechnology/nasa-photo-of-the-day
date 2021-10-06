import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';

function App() {
  const[pics, setPics] = useState([]);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=HXdg79f4jls1dnYfc551MBhS1xwFOdVmj6iAntnJ')
    .then(res => {
      setPics(res.data);
      console.log(res);
    }).catch(err => {
      console.error(err);
    })
  }, []);
  return (
    <div className="App">
      
      <h1>Astronomy Picture Of The Day</h1>
      <h2>{pics.title}</h2>
      <h3>{pics.date}</h3>
      <img src={pics.url} ></img>
      <h4>{pics.copyright}</h4>
      <div>
        <h4> Image Description</h4>
        <p> {pics.explanation} </p>
      </div>
         
    </div>
  );
}

export default App;
