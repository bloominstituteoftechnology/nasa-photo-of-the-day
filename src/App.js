import React, { useState, useEffect } from "react";
import style from 'styled-components'
import axios from 'axios'
import "./App.css";

const Container = style.div`
  width: 80%;
  padding: 2%
`

const Header = style.h1`
  text-align: center;'
  width: 10rem;
  text-transform: uppercase;
  border: 2rem;
  border-radius: 8px;
  background-color: #4287f5;
  color: white;
`

const Date = style.h3`
  text-align: left;
  padding: 1.75%;
  text-transform: lowercase;
  border: 2rem;
  border-radius: 8px;
  background-color: none;
  color: black;
`

const ImageMode = style.img`
  text-align: center;
  width: 80%;
`

const H3tag = style.h3`
  text-align: center;
  width: 80%;
  padding: 1.25rem;
  margin: 1rem;
`

const Paragraph = style.p`
  text-align: center;
  width: 80%;
  border: 1rem;
  border-radius: 12px;
  background-color: #80848a;
  color: #dfe2e8;
  padding: 1.25rem;
  margin: 1rem;
`

// const Header = style.h1`
//   text-align: center;
//   padding: 1.75%;
//   text-transform: uppercase;
//   border: 2rem;
//   border-radius: 8px;
//   background-color: #4287f5;
//   color: white;
// `

function App() {

  const [picture, setPicture] = useState([])
  const [mainData, setMainData] = useState([])

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then((res) => setPicture(res.data.hdurl))
    .catch(err => console.log('Error getting friends: ', err))
  }, [])

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then((res) => setMainData(res.data))
    .catch(err => console.log('Error getting friends: ', err))
  }, [])

  return (
    <Container>
      <p>
        <Header>Nasa Update Page!</Header>
        <Date>{mainData.date}</Date>
        <span role="img" aria-label='go!'>🚀</span>
        <ImageMode src={picture} />
        <H3tag>{mainData.title}</H3tag>
        <p>{mainData.explanation}</p>
      </p>
    </Container>
  );
}

export default App;
