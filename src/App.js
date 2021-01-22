import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Header from "./Components/Header"
import Body from "./Components/Body"
import styled from 'styled-components'


const API_KEY = "5r57XZvxgGc8XZ9brMblKashYzujTQsHut2ZS3eM";
const URL = "https://api.nasa.gov/planetary"

const StyledApp = styled.div `
background-image : url("https://images.unsplash.com/flagged/photo-1564292284203-6a4ddcc5bda3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTI4fHxzcGFjZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
background-size: cover;
background-repeat: no-repeat;
`

function App() {

  const [photo, setPhoto] = useState([]);


  useEffect(() => {
    const fetchAPOD = () => {
      axios.get(`${URL}/apod?api_key=${API_KEY}`)
      .then(res => {
        setPhoto(res.data)
      })
      .catch(err => {
        console.log('err', err)
      })
    }
    fetchAPOD()
  }, [])

  return (
    <StyledApp className="App">
      <Header title = {photo.title} date = {photo.date}/>
      <Body photo = {photo.url} explanation = {photo.explanation} />
    </StyledApp>

  );
}

export default App;
