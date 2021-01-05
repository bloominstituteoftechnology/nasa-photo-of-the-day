import React from "react";
import ImageFinder from './components/ImageFinder' 
import styled from 'styled-components'


const AppHeader = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const NasaLogo = styled.img`
  width: 40%;
`;



function App() {
  return (
    <AppHeader>
      <NasaLogo src='https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png' />
      <h1>NASA Pic of the Day Finder</h1>
      <ImageFinder />
    </AppHeader>
  );
}

export default App;
