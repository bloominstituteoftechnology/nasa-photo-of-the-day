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
    margin:4px 0;
`;

const NasaImage = styled.img`
    max-width:90%;
    margin:auto;
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
           <p>{props.explanation}
           Bacon ipsum dolor amet drumstick beef ribs doner salami, pig leberkas corned beef tri-tip ham hock boudin meatball. Swine tongue burgdoggen porchetta, alcatra salami venison pastrami short ribs. Beef shankle ham hock kielbasa short loin. Filet mignon shank leberkas ham ham hock prosciutto burgdoggen tongue spare ribs pork loin fatback </p>

           </ExplanationText>


           </CardWrapper> 
           </div>
           
       
    )
}

export default Card;
