import React, { useState, useEffect } from "react";
import "./App.css";
import ApodContainer from "./ApodContainer.js"
import ApodInfoContainer from "./ApodInfoContainer.js"
import sampleData from "./sampleApodDataSoIDontHitApiLimitWhileTesting"
import Axios from "axios";
import moment from "moment";

function App() {
  const [datePosition, setDatePosition] = useState(0);
  const [responseData, setResponseData] = useState([])
  
  const dataGetter = (date) => {
    Axios.get("https://api.nasa.gov/planetary/apod?api_key=UINXdeCxgzBElfZoohNMpP8Mpfb9HutuNedtA8rz&date="+date)
    .then(response => {
      console.log(response)
      setResponseData(response.data)
    })
    .catch(error => {
      console.log("Something went wrong with axios request", error)
    })
  }
  useEffect(() => {
    dataGetter(moment().add(datePosition, 'days').format('YYYY-MM-DD'))}, [datePosition])
  return (
    <div className="App">
      <div className="image_and_buttons">
        <ApodContainer data={responseData}/>
        <button onClick={ () => {
          setResponseData([])
          setDatePosition(datePosition - 1);
          console.log(datePosition)
        }
        }>Previous</button>
        <button onClick={ () => {
          setResponseData([])
          setDatePosition(datePosition + 1);
          console.log(datePosition)
        }
        }>Next</button>
      </div>
      <ApodInfoContainer data={responseData}/>
    </div>
  );
}

export default App;
