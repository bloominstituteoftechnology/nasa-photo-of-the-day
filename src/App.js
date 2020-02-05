import React, { useState, useEffect } from "react";
import "./App.css";
import ApodContainer from "./ApodContainer.js"
import ApodInfoContainer from "./ApodInfoContainer.js"
import sampleData from "./sampleApodDataSoIDontHitApiLimitWhileTesting"
import Axios from "axios";

function App() {
  const [responseData, setResponseData] = useState([])
  useEffect(() => {
    Axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(response => {
      console.log(response)
      setResponseData(response.data)
    })
    .catch(error => {
      console.log("Something went wrong with axios request", error)
    })
  }, [])

  return (
    <div className="App">
      <ApodContainer data={responseData}/>
      <ApodInfoContainer data={responseData}/>
    </div>
  );
}

export default App;
