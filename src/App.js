import React, {useState, useEffect} from "react";
import "./App.css";
import Header from './Components/header';
import Body from './Components/body';
import axios from 'axios';

function App() {
const [nasaData, setNasaData] = useState([]);
const [title, setTitle] = useState([]);
const [pic, setPic] =useState([]);
const [discription, setDiscription] = useState([]);
useEffect(() => {
  axios.get("https://api.nasa.gov/planetary/apod?api_key=MjOoXMh2ahiorGCM7YMmKlPo88UBehPSatVjdv8i")
  .then((res) => {
    setTitle(res.data.title);
    setPic(res.data)
    setDiscription(res.data.url);
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  })
}, []);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
