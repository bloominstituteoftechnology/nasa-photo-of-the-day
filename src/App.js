import React, {useState, useEffect} from "react";
import "./App.css";
import Header from './Components/header';
import Body from './Components/body';
import axios from 'axios';
import styled from 'styled-components';

const bodyDiv = styled.div`
margin: 2%;
padding: 3%;
background-color: #5577aa; 
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
    <bodyDiv className="App">
    <Header data={nasaData}/>
    <Body data = {nasaData}/>
    </bodyDiv>
  );
}

export default App;
