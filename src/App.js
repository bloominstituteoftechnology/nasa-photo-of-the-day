import React, {useState, useEffect} from "react";
import "./App.css";
import Head from './Components/header';
import Body from './Components/body';
import axios from 'axios';
import styled from 'styled-components';

const BodyDiv = styled.div`
margin: auto%;
padding: 3%;
background-image: linear-gradiant(#000, #4d4c4c, #a8a3a3); 
text-align: center;
`;

function App() {
const [nasaData, setNasaData] = useState([]);

useEffect(() => {
  axios.get("https://api.nasa.gov/planetary/apod?api_key=MjOoXMh2ahiorGCM7YMmKlPo88UBehPSatVjdv8i")
  .then((res) => {
    setNasaData(res.data);
 
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  })
}, []);

  return (
    <BodyDiv className="App">
    <Head data={nasaData}/>
    <Body data = {nasaData}/>
    </BodyDiv>
  );
}

export default App;
