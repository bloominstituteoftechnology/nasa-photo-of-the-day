import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header"
const apiKey = "3XhlqxAbaPj8VO9eBcshjX9EP9gVvcTdy6rbroht";

function App() {
  const [nasaData, setNasaData] = useState()
  const [count, setCount] = useState(5)

  useEffect(() => {
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`)
    .then((res) => {
      setNasaData(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <div className="App">
      {
        nasaData && <Header nasaData={nasaData} date={nasaData.date}/>
      }
    </div>
  );
}

export default App;
