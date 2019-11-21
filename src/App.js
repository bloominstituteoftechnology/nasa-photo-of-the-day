import React, { useEffect, useState} from "react";
import axios from "axios";
import styled from "styled-components";
import Photo from "./components/Photo";
import Date from "./components/Date";

import "./App.css";

const H1 = styled.h1`
  text-align: center;
`;

const AppContainer = styled.div`
  background-color: white;
  max-width: 1000px;
  padding: 20px;
  margin: 0 auto;

  @media only screen and (max-width: 800px) {
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;

function App() {
  const [photo, setPhoto] = useState([]);
  const [date, setDate] = useState('2019-11-19');

  const didUpdate = () => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=yGkb9ZbzwBlOn7HLLv5CLROwlrkdqgBAPiVttbWI&date=${date}`)
      .then(response => {
        setPhoto(response.data);
        console.log(response);
      })
      .catch(error => console.log(error));
  };

  useEffect(didUpdate, [date]);

  return (
    <AppContainer className="App">
      <Date photo={photo} setDate={setDate}/>
      <H1>NASA Astronomy Photo of the Day</H1>
      <Photo photo={photo} />
    </AppContainer>
  );
}

export default App;
