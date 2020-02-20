import React from "react";
import styled from "styled-components";

const CardWrapper = styled.section`
    padding:4px;
    width:80%;
    margin:auto;
    background:#f5dddd;
    border-top:1px solid #3a4454;
`;

const NasaImageContainer = styled.section`
   width:80%;
    margin:auto;
`;

const NasaImage = styled.img`
    max-width:90%;
    margin:auto;
    border:1px solid #3a4454;
    border-radius:2px;

    box-shadow: -2px -1px 17px -1px rgba(0,0,0,0.2);
-webkit-box-shadow: -2px -1px 17px -1px rgba(0,0,0,0.2);
-moz-box-shadow: -2px -1px 17px -1px rgba(0,0,0,0.2);
`;

const ImageTitle = styled.h4`
    color:#3c3c3c;
`;

const ImageDate = styled.h6`
        color:#3c3c3c;
`;

const ExplanationText = styled.p`
    color:#3c3c3c;
    font-weight:bold;   
    text-align:left;
    margin:8px;
`;


const Card = (props) => {
    return (
       
        <div>

           <NasaImageContainer key={props.id} >
               <NasaImage alt="nasa photo of the day" src={props.url} />

               </NasaImageContainer>
           

                <ImageTitle >
                Image Title: {props.title}
                </ImageTitle>

                <ImageDate>
                   Date: {props.date}
                </ImageDate>

                <CardWrapper>

               <ExplanationText>
           <p>{props.explanation}</p>

           </ExplanationText>


           </CardWrapper> 
           </div>
           
       
    )
}

export default Card;
