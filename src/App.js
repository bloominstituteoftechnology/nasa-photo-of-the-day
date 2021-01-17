import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Image from "./Image"
import Description from "./Description"
import Date from "./Date"

function App() {

  const [data, setNasaData] = useState([])

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=adten6nWHl8f7NxrLJZIuKHCpDjxzTRaKfp74QVE')
      .then((response) => {
      setNasaData(response.data)
      })
      .catch(err => console.log(err))
  }, [])


  return (
    <div className="App">
      { console.log(data) }
      <Image src={data.hdurl} title={data.title} />
      <Description explanation={data.explanation} />
      <Date date={data.date} />
    </div>
  );


}

export default App;
