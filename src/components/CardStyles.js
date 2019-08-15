import React from "react";
import styled from "styled-components";


/*card styles: card container, picture, title text, and date */

const CardContainer = styled.div`
    display: flex;    
    flex-direction: column;     
    width: 80%;
    height: auto;
    font-family: sans-serif;     
    border: 5px solid #ccc;
    
    -moz-box-shadow:    3px 3px 5px 6px #ccc;
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;
  box-shadow:         3px 3px 5px 6px #ccc;
`;

const PhotoOfTheDay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
    
         
`;

const PictureTitle = styled.h2`
  display: flex;  
  font-size: 3rem;
  text-transform: uppercase;
  color: red;

`;

const Image = styled.img`
    width: 700px;
    height: 600px; 
    border-radius: 50%;
         
`;

const ParagraphDescription = styled.p`
    text-align: center;

`;


export {CardContainer, PhotoOfTheDay, Image, PictureTitle, ParagraphDescription};