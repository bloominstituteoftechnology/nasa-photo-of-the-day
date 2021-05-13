import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Images from "./Images"
import Hero from "./Hero"
const apiKey = "3XhlqxAbaPj8VO9eBcshjX9EP9gVvcTdy6rbroht";

function App() {
  const [nasaData, setNasaData] = useState()
  const [count, setCount] = useState(4)

  useEffect(() => {
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`)
    .then((res) => {
      setNasaData(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [count])
   


  return (
    <div className="App">
      { nasaData && <Hero heroImage={nasaData} />}
      { nasaData && <Images nasaData={nasaData.slice(1)} date={nasaData.date} setCount={setCount} count={count}/>}
      
    </div>
  );
}

export default App;
