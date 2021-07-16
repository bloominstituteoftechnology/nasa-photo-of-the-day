import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Photo from "./components/Photo";
import Title from "./components/Title";
import axios from "axios";

function App() {
  const [title, setTitle] = useState("")
  const [url, setURL] = useState("")

  // fetch api using fetch
  // useEffect(() => {
  //   fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY").then(res => res.json()).then(res => {
  //     setState({url: res.url})
  // }).catch(err => console.log(err))
  // }, [])

  // fetch api using axios
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY").then(res => {
      console.log('data: ', res)
      setTitle(res.data.title)
      setURL(res.data.url)
  }).catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <Header />
      <Photo url={url} />
      <Title title={title}/>
    </div>
  );
}