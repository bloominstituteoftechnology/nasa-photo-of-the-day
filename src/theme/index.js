/**Thomas Bielawski
 * Lambda School WEB45
 * 2.2.3 Nasa APOD /src/theme/index.js
 * 7/15/2021
 * Apply themes across the app/site from one location
 */

//Define the theme object using css

import React from "react";
import styled from 'styled-components'
//import React, { useState, useEffect } from "react";
//import axios from "axios";
import "./App.css";
import Date from "./components/Date";
import Title from "./components/Title";
import Info from "./components/Info";
import Media from "./components/Media";
//import styled from 'styled-components'
//import {SpaceFriend} from "./theme";



// export default 
// {
//     primaryColor: "royalblue",
//     secondaryColor: "crimson",
//     tertiaryColor: "gold",
//     dangerColor: "red",
//     black: "black",
//     white: "white",
//     breakPointMobile: "(max-width: 550px)",
//     padding: { small: "4px", large: "12px", }
// }






export default function Friend({ SpaceFriend}) 
{
    SpaceFriend = styled.div`
    //Change the background color from index.js theme
    background-color: blue;
    &:hover{background-color: red}
    color:white;
  
`
return(
    <SpaceFriend className="App"> 
      <p>
       NASA APOD <span role="img" aria-label='go!'>🚀</span>!
      </p>
      {/**Render the title */}
      <Title title = {data.title} />

      {/**Render the date */}
      <Date date = {data.date} />

      {/**Show the info */}
      <Info explanation = {data.explanation} />

      {/**Render the video player */}
      <Media url =  {data.url} />
      
    </SpaceFriend>
    
  );
}
