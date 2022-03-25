import axios from "axios";
import React, {useState, useEffect} from "react";
import { BASE_URL, API_KEY } from "./index";
import Title from "./Title";
import Details from "./Details";
import Photo from "./Photo";
import "./App.css";
import styledComponents from "styled-components";

const StyledApp = styledComponents.div`
background-color: ${pr=>pr.theme.primaryColor};
color: ${pr=>pr.theme.white};
text-align: center;

.parent {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  }
  
  .h1 { grid-area: 1 / 1 / 2 / 3; }
  .Title { grid-area: 2 / 1 / 3 / 2; }
  .Details { grid-area: 3 / 1 / 7 / 2; }
  .Photo { grid-area: 2 / 2 / 7 / 3; }

`

function App() {
  
  return (
    <StyledApp>
      <h1>Nasa Photo of the Day</h1>
      <Title />
      <Photo />
      <Details />
    </StyledApp>
  );
}


export default App;
