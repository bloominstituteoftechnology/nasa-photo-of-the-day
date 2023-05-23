import React, { useState, useEffect }from "react";
import axios from 'axios';

import "./App.css";

import NasaPhoto from "./Components/NasaPhoto";

const dummyData = {
  date: "2023-05-23",
  explanation: "Big storms are different on Jupiter. On Earth, huge hurricanes and colossal cyclones are centered on regions of low pressure, but on Jupiter, it is the high-pressure, anti-cyclone storms that are the largest. On Earth, large storms can last weeks, but on Jupiter they can last years. On Earth, large storms can be as large as a country, but on Jupiter, large storms can be as large as planet Earth. Both types of storms are known to exhibit lightning. The featured image of Jupiter's clouds was composed from images and data captured by the robotic Juno spacecraft as it swooped close to the massive planet in August 2020.  A swirling white oval is visible nearby, while numerous smaller cloud swirls extend into the distance.  On Jupiter, light-colored clouds are usually higher up than dark clouds. Despite their differences, studying storm clouds on distant Jupiter provides insights into storms and other weather patterns on familiar Earth.     Surf the Universe: Random APOD Generator",
  hdurl: "https://apod.nasa.gov/apod/image/2305 JupiterSwirls_JunoGill_960.jpg",
  title: "Jupiter's Swirls from Juno"
} 

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <div className="App">
      {data && <NasaPhoto photo={data}/>}
    </div>
  );
}

export default App;