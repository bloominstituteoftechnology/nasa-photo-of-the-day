import React from "react";
import styled from "styled-components";

const CardWrapper = styled.section`
    padding:4px;
    width:80%;
    margin:auto;
`;

const ExplanationText = styled.p`
    color:#3c3c3c;
    font-weight:bold;
    border-top:1px solid #3a4454;
    text-align:left;
`;


{/*image uses state*/}
const Card = (props) => {
    return (
        <div key={props.id}>

            
            <img alt="nasa photo of the day" src={props.url} />
            <div>
            <p>{props.date}</p>
            <p>Date 2002</p>
            <p>{props.title}</p>
            <p>Image Title</p>
            </div>
           <div>
           <CardWrapper>
               <ExplanationText>
           <p>{props.explanation}
           Bacon ipsum dolor amet drumstick beef ribs doner salami, pig leberkas corned beef tri-tip ham hock boudin meatball. Swine tongue burgdoggen porchetta, alcatra salami venison pastrami short ribs. Beef shankle ham hock kielbasa short loin. Filet mignon shank leberkas ham ham hock prosciutto burgdoggen tongue spare ribs pork loin fatback </p>

           </ExplanationText>


           </CardWrapper> 
           </div>
           
        </div>
    )
}

export default Card;
