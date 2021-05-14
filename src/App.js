import React, { useEffect, useState } from "react";
import axios from "axios"
import "./App.css";
import Head from "./compoenets/header"
import Text from "./compoenets/Body"

function App() {
  const [photo, setPhoto] = useState()
  const [date, setDate] = useState()
  const [info, setInfo] = useState()
  const [title, setTitle] = useState()
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=O7cg7Ma4ZCIaER1F7mMqYj9pnWdNc7bqG8QAaaGR`)
      .then(yo => {
        setPhoto(yo.data.url)
        setDate(yo.data.date)
        setInfo(yo.data.explanation)
        setTitle(yo.data.title)
      }).catch(console.log("Quit"))
  })


  return (
    <div className="App">
      <Head date={date} title={title} />
      <Text imgg={photo} info={info} />
    </div>
  );
}

export default App;
