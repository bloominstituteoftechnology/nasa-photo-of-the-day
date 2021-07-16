import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import "./App.css";

import Image from "./Components/Image";
import Video from "./Components/Video";

import styled from 'styled-components'
import Header from "./Components/Header";

const Button = styled.button`
  font-family: 'Poppins', sans-serif;
  background-color: ${props => props.theme.primaryColor};
  color:white;
  outline: 0;
  border: 0;
  margin: 0 15px;
  padding: 5px 25px;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 2px;

  &:hover{
  cursor: pointer;
  transform: scale(1.1);
  }
`

const ButtonContainer = styled.div`
  display:flex;
  justify-content:center;
  padding: 5px;
`

const MediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

function App() {
  const [apodData, setApodData] = useState({});
  const [date, setDate] = useState(moment(new Date()).format("YYYY-MM-DD"));
  const [error, setError] = useState('')

  function getApodData() {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=cPnxYU2eBFaVE84dw9qlg6kWLIjYaVwMOSeSbIbK&date=${date}`
      )
      .then((response) => {
        console.log(response.data);
        setApodData(response.data);
      });
  }

  useEffect(() => {
    getApodData();
  // eslint-disable-next-line
  }, [date]);

  function changeDateBackwards() {
    setError('')
    setDate(moment(date).subtract(1, "days").format("YYYY-MM-DD"));
  }

  function changeDateForwards() {
    date !== moment(new Date()).format("YYYY-MM-DD") ? setDate(moment(date).add(1, "days").format("YYYY-MM-DD")) : setError(`There is no pictures yet for the following day!`);
  }

  return (
    <div className="App">
      <Header/>
      { error ? (<h1>{error}</h1>) : (<></>)}
      <MediaContainer>
        {apodData.media_type === "image" ? (
          <Image data={apodData} />
        ) : (
          <Video data={apodData} />
        )}

        <ButtonContainer>
          <Button onClick={() => changeDateBackwards()}>
            {" "}
            Go Back
          </Button>
          <Button onClick={() => changeDateForwards()}>
            {" "}
            Go Ahead
          </Button>
        </ButtonContainer>
      </MediaContainer>
    </div>
  );
}

export default App;
