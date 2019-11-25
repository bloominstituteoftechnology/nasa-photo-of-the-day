import React from "react";
import styled from "styled-components";


/*card styles: card container, picture, title text, and date */

//photo of the day container
const CardContainer = styled.div`
    display: flex;    
    flex-direction: column; 
    justify-content: center;
    align-content: center;       
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

const PhotoAndCalendar = styled.div`
    display: flex;
    width: 100%;    
    height:auto;
    flex-direction: column;
    
      
`;

const PhotoOfTheDay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;      
    
         
`;

const CalendarPhotoTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

`;

const PictureTitle = styled.h2`
  display: flex;  
  font-size: 2vw;
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
    width: 100%;
    height: 400px; 
   
    @media screen and (max-width: 800px) {
        width: 100%;
        border-radius: 25%;
          
      }
  
      @media screen and (max-width: 500px) {
        width: 100%;
        border-radius: 0;
          
      }
         
`;

const ParagraphDiv = styled.div`
    display:flex;
    width: 100%;       

`;

const ParagraphDescription = styled.p`
    text-align: justify;    

`;

const InnerContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;    

`;


export {CardContainer,  PhotoAndCalendar, InnerContainer, ParagraphDiv, CalendarPhotoTitle, PhotoOfTheDay, Image, PictureTitle, ParagraphDescription};