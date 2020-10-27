import React, { useState } from "react";
import axios from 'axios'
import "./App.css";

const getDataFromNasa = (apiKey => {
  axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
  .then(response => {
    const nasaData = response.data;
    console.log(nasaData);
    return nasaData;
  })
})

function App() {
  const [nasaData, setNasaData] = useState(getDataFromNasa('T1nb8B9a9boKrWQ9T1tx0AsUbhntIMLFlzTewDTb'));

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
