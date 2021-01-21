import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Display from "./Display.js";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  const [pictures, setPictures] = useState([])
  useEffect(() => {
    const data = axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((res) => {
        console.log(res)
        setPictures(res.data)
      
      }).catch((error) => {
        console.log(error)
      })
    console.log(data)
  }, [])

  if (!pictures.data) {
    return (
      <div className="App">
        <Header 
      date={pictures.date}
        />
        <Display
          key={pictures.id}
          title={pictures.title}
          explanation={pictures.explanation}
          url={pictures.url}
          copyright={pictures.copyright}
        />
        <Footer
          date={pictures.date}
          title={pictures.title}
          />
      </div>
    );
  }
  return <h2><span role="img" aria-label='go!'>🚀</span> En Route to Picture!<span role="img" aria-label='go!'>🚀</span></h2>
}
export default App;
