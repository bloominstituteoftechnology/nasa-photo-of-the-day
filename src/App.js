import React from "react";
import "./App.css";
import Img from './Img.js';
import Header from './Header.js';
import Body from './Body.js';
import axios from 'axios';
import styled from 'styled-components'
function App() {

const url = 'https://api.nasa.gov/planetary/apod?api_key=PB4Z7gk0OvhjnD8nV7V8GocwjGXgna9ljdOIFUkI';


axios.get(url).then((res)=>{
  console.log(res)
  const info = res.data.url;
  console.log("INFO!",info);
  return 'Hello';
}).catch((err)=>{
  console.log(err);
})

console.log("HERE!",axios);

  
  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      <Header src = {url}/>
      <Img imgSrc = {url}/>
      <Body src = {url}/>
    </div>
  );
}

export default App;
