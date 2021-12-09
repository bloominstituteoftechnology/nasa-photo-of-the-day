import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import NasaImage from "./NasaImage";
import ImageInfo from "./ImageInfo";
import styled from "styled-components";

const StyledApp = styled.div`
  background-color: ${(props) => props.theme.mainBackgroundColor};
`;

const StyledDate = styled.p`
  font-weight: bold;
`;

function App() {
  const [nasaData, setNasaData] = useState({});

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((resp) => {
        setNasaData(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const { date, title, hdurl, explanation, copyright } = nasaData;

  return (
    <StyledApp>
      <div className="App">
        <h1>Astronomy Picture of the Day</h1>
        <p>
          Each day a different image or photograph of our fascinating universe
          is featured, along with a brief explanation written by a professional
          astronomer.{" "}
          <span role="img" aria-label="go!">
            🚀
          </span>
        </p>
        <StyledDate>{date}</StyledDate>
        <NasaImage nasaImage={hdurl} />
        <ImageInfo imageInfo={{ title, copyright, explanation }} />
      </div>
    </StyledApp>
  );
}

export default App;
