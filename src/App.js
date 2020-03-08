import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';

import Video from './Components/Video.js';
import Header from './Components/Header.js';
import styled from 'styled-components';

const StyledApp = styled.div`
  border: 3px green solid;
  background-color: lightgreen;
  width: 80%;
  border-radius: 20px;
`

const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  border: 2px black solid;
  width: 650px;
  padding: 5px;
  margin: 10px auto;
`

function App() {

  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY').then(response => {
      setNasaData(response.data);
    });
  }, []);

  console.log(nasaData);

  return (
    <StyledApp className="App">
      <div className="top_content">
        <Header title={nasaData.title} date={nasaData.date} />
        <StyledBox>
          <Video media_type={nasaData.media_type} src={nasaData.url} hdurl={nasaData.hdurl} />
        </StyledBox>
      </div>
      <div className="bottom_content">
        <p className="explanation">
          {/* Read through the instructions in the README.md file to build your NASA app! Have fun 🚀! */}
          {nasaData.explanation};
      </p>
      </div>
    </StyledApp>
  );
}

export default App;
