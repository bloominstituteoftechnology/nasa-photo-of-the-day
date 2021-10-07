import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";
import { API_KEY, BASE_URL, KEY_CONNECT } from "./Getapi.js";

function App() {

  const [nasaData, setNasaData] = useState([]);
  const [spacePhoto, setSpacePhoto] = useState('imgURL')

  useEffect(() => {
  axios.get(`${BASE_URL}${KEY_CONNECT}${API_KEY}`)
    .then(response => {
      setNasaData(response.data)
      console.log(nasaData);
    })
    .catch(error => {
      console.log(error);
    })
  },[]
  )

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
