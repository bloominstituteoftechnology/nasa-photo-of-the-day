import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";
import { API_KEY, BASE_URL, KEY_CONNECT } from "./Getapi.js";
import styled from 'styled-components';

const StyledApp = styled.div`
  display: flex;
  border: 2px solid red;
  background-color: orange;
  padding: 8px;
`
const StyledImg = styled.img`
  width: 60%;
`
const StyledP = styled.p`
  font-weight: bold;
`
function App() {

  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
  axios.get(`${BASE_URL}${KEY_CONNECT}${API_KEY}`)
    .then(response => {
      setNasaData(response.data.url)
    })
    .catch(error => {
      console.log(error);
    })
  },[]
  )
  console.log(nasaData);

  return (
    <StyledApp>
      <StyledP>
        Pic of the day!!
      </StyledP>
      <StyledImg src={nasaData} alt="a random pic"/>
    </StyledApp>
  );
}

export default App;
