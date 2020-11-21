import React, {useEffect, useState} from "react";
import axios from "axios";
import "./App.css";
import Picture from "./components/Picture"
import Header from "./components/Header"
import Info from "./components/Info"
import styled from "styled-components"
// e8OeXlRcUVxAUsDkhDK6RyMMOUua7bvubf9KcEhm
// GET https://api.nasa.gov/planetary/apod
function App() {
  const [nasaPod, setNasaPod] = useState(null)
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=e8OeXlRcUVxAUsDkhDK6RyMMOUua7bvubf9KcEhm&date=2020-11-16").then((res) => {
      console.log(res)
      setNasaPod(res.data)
    })
  }, [])
  return (
    <div className="App">
      {nasaPod ? 
      <>
        <Header copyright = {nasaPod.copyright} date = {nasaPod.date} title = {nasaPod.title}/>
        <Picture imgUrl = {nasaPod.hdurl}/> 
        <Info infoText = {nasaPod.explanation}/>
      </>: "Loading..."}
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}
// done1
export default App;
