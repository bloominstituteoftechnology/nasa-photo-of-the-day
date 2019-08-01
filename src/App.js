import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import "./App.css";

import axios from 'axios';
import Date from './date';
import Explanation from './explanation';
import Media from './media';
import Title from './title';
import Copyright from './copyright';


//Styled AllDiv
const AllDiv = styled.div `
  width: 100vw;
  height: 100vh;
`;

//Styled WrapperDiv
const WrapperDiv = styled.div `
  width: 100%;
  height: 100%;
  padding: auto;
  display: flex; 
  background-image: url("https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/0kjHIH6/a-view-of-outer-space-flying-between-the-stars_bdt1pvas_thumbnail-full01.png")
`;

//Styled TextDiv
const TextDiv = styled.div `
  width: 50vw;
  height: 330vh;
  margin: auto;
`;

//styled ImgDiv
const ImgDiv = styled.div `
  width: 50vw;
  height: 300vh;
  margin: auto;
`;

function App() {
  const [spaceball, setSpaceball] = useState();

  useEffect ( () => { 
    axios 
      .get("https://api.nasa.gov/planetary/apod?api_key=imNdceQO22NiaLCcNMCMhNDvcCa1ZdPFkTZBhd9h")
      .then(result => {
        setSpaceball(result.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [] );

  let date = null;
  let explanation = null;
  let url = null;
  let title = null;
  let type = null;
  let cr = null;
  
  if(spaceball) {
    date = spaceball.date;
    explanation = spaceball.explanation;
    url = spaceball.url;
    title = spaceball.title;
    type = spaceball.media_type;
    cr = spaceball.copyright;
  }
  return (
    <AllDiv>
      <WrapperDiv>

        <TextDiv>
          <Title title = {title} />
          <Date date = {date} />
          
          <Explanation explanation = {explanation} />
        </TextDiv>

        <ImgDiv>
          <Media type = {type} url = {url} />
          <Copyright cr = {cr} />
        </ImgDiv>

      </WrapperDiv>
    </AllDiv>
  )
}
export default App;