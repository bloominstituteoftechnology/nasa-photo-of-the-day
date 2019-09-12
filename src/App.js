import React from "react";
import "./App.css";
import NasaData from './components/NasaData';
import MarsData from './components/Mars/MarsData';
import TechData from './components/TechData/TechData';
import Earth from './components/Earth/Earth';
import styled from "styled-components";


const WelcomeHeader = styled.h1`
  background: url("https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80") fixed;
  height: 200px;
  width: 100vw;
  color: white;
  margin-top: 0;
  padding-top: 50px;
`;

function App() {
  return (
    <div className="App">
      {/* <BannerImg /> */}
      <WelcomeHeader>Welcome Space Nerds</WelcomeHeader>
      <div className="container">
        <NasaData/>
        <div className='right-side'>
          <MarsData/>
          <TechData/>
          <Earth/>
        </div>
      </div>
    </div>
  );
}

export default App;
