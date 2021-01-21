import React, {useState, useEffect} from "react";
import "./App.css";
import PageHeader from './components/PageHeader';
import PictureContainer from "./components/PictureContainer";
import axios from 'axios';
import WhoWhen from "./components/WhoWhen";
import styled, { keyframes } from "styled-components";


function App() {
  
  const [nasaData, setNasaData] = useState({});
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=5hkloYDfflsiN6GABSwSYa2G8yJPGueLlAVuYFHM&date=2012-03-14')
      .then(res => {
        console.log('this is the response', res.data);
        setNasaData(res.data);
      })
      .catch(err => {
        console.log('this is the error', err);
      })
  } ,[])

  return (
    <StyledRoot>
      <PageHeader />
      
      <PictureContainer photoData={nasaData} />
      <WhoWhen photoData={nasaData}/>
    </StyledRoot>
  );
}


const StyledRoot = styled.div`
  background: yellow;
  height: 120vh;
  width: 100vw;
  text-align: center;
  

  
`;


export default App;

