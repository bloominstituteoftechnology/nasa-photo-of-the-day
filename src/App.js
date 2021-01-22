import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Display from "./Display.js";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";

const StyledApp = styled.div`
background-image:url("../src/components/stars.jpeg");
text-align: center;
background-color: #15161C;
breakpointMobile: "(max-width: 550px)",
breakpoints: {
  mobile: "(max-width: 550px)",
  tablet: "(max-width: 800px)",
}

`
function App() {

  const [pictures, setPictures] = useState([])
  useEffect(() => {
    const data = axios.get("https://api.nasa.gov/planetary/apod?api_key=FUMv74J1sIq2fJsjs9XpucbSbDMCaSNZYXDxHU7b")
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
      <StyledApp className="App">
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
      </StyledApp>
    );
  }
  return <h2><span role="img" aria-label='go!'>🚀</span> En Route to Picture!<span role="img" aria-label='go!'>🚀</span></h2>
}
export default App;
