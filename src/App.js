import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios'

function App() {
const [dailyImage, setDailyImage] = useState(true);

const BASE_URL = "https://api.nasa.gov/planetary/"
const API_KEY = 'C1fqRgcG5cp1VtQ8rKju45mWqlLQfQ25X1kPLmuM'

  useEffect(() => {
axios.get(`${BASE_URL}apod?api_key=${API_KEY}`)
.then(res => setDailyImage(res.data.url)
) }, [dailyImage])


  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun!
      </p>
      <div role="img" aria-label='go!'>🚀 The daily image is: </div>
      <img src={dailyImage} alt=''></img>
    </div>
  );
}

export default App;
