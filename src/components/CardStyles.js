import React from "react";
import styled from "styled-components";


/*card styles: card container, picture, title text, and date */

const CardContainer = styled.div`
    display: flex;    
    flex-direction: column;     
    width: 80%;
    height: auto;
    font-family: sans-serif;  

    @media screen and (max-width: 800px) {
        width: 100%;
          
      }
  
      @media screen and (max-width: 500px) {
        width: 100%;
          
      }
    
   
`;

const PhotoOfTheDay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
    
         
`;

const PictureTitle = styled.h2`
  display: flex;  
  font-size: 3vw;
  text-transform: uppercase;
  color: red;
  text-align: center;

  @media screen and (max-width: 800px) {
   font-size: 4vw;
      
  }

  @media screen and (max-width: 500px) {
    font-size: 4vw;
      
  }

`;

const Image = styled.img`
    width: 700px;
    height: 600px; 
    border-radius: 50%;

    @media screen and (max-width: 800px) {
        width: 100%;
        border-radius: 25%;
          
      }
  
      @media screen and (max-width: 500px) {
        width: 100%;
        border-radius: 0;
          
      }
         
`;

const ParagraphDescription = styled.p`
    text-align: center;
    

`;


export {CardContainer, PhotoOfTheDay, Image, PictureTitle, ParagraphDescription};