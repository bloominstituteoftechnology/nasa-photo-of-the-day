import React from "react";
import styled from "styled-components";



const CardWrapper = styled.section`
    padding:4px;
    width:80%;
    margin:auto;
    background:#f0f0f0;
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
                {props.explanation}
             </ExplanationText>

           </CardWrapper> 
           </div>
           
       
    )
}

export default Card;
