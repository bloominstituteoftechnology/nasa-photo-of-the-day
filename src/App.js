import React from "react";
import "./App.css";
import Title from "./Title";
import Photo from "./Photo";
import Caption from "./Caption";
import styled from 'styled-components';

const Header = styled.h1`
text-align: center;
color: green;
`;

function App() {
  return (
    <div className="App">
      <img className ='logo' src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg" alt='nasa logo'></img>
      <Header>Astronomy Photo of the Day</Header>
      
      <Title />
      <Photo />
      <Caption />

      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
    </div>
  );
}

export default App;
