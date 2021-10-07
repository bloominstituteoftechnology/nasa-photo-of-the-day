import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { BASE_URL, API_KEY } from "./constants/index";
import styled from 'styled-components'


const StyledParagraph = styled.p`
  color: lightblue;
  background-color: darkblue;
  margin-left: 18%;
  margin-right: 18%;
  padding-top: 5%;
  padding-bottom: 5%;
`

const StyledPhoto = styled.img`
  width: 15%;
`

function App() {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/apod?api_key=${API_KEY}`)
      .then((res) => {
        console.log(res);
        setPhoto(res.data);
        return photo
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="App">
      <StyledParagraph>
        SPAAAACEEE!!!{" "}
        <span role="img" aria-label="go!">
          🚀
        </span>
        !
      </StyledParagraph>
      <StyledPhoto img src={`${photo.url}`} /> 
    </div>
  );
}

export default App;
