import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./Header"
import Footer from "./Footer"
import Body from "./Body"

function App() {
  const [apod, setApod] = useState([])
  useEffect(() => {
    const data = axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then((response) => {
      console.log(response)
      setApod(response.data)
    })
      .catch((error) =>{
        console.log("APOD GET FAILED!!", error)
      })
      console.log(data)
  }, [])

if (!apod.data) {
  return (
    <div class="App">
      <Header date={apod.date} />
      <Body 
       key={apod.id}
       title={apod.title}
       explanation={apod.explanation}
       url={apod.url}
       copyright={apod.copyright}
      />
      <Footer date={apod.date} title={apod.title}/>
    </div>
  )
}
return <h1><span role="img" aria-label='To space!'>Liftoff!</span> Our best astronauts are piloting you to the picture!<span role='img' aria-label='To space!'>En Route!</span></h1>
}

export default App;
