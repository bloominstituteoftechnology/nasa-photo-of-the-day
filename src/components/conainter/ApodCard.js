import React from "react"
import styled from "styled-components";



// styles
const WrapperDiv = styled.div`
    display:  flex;
    flex-direction:column;
    width: 50vw;
    align-items: center;
    justify-content: center;
    border: 3px grey solid;
    border-radius:5px;
    // margin-top: 5vh;
`;
const HeaderDiv = styled.div`
background-color: cyan;
width:100%;
`;
const ContentDiv = styled.div`
width:100%;
`;

const Image = styled.img`
width: 50%;
border-radius: 5px;
margin-top:10px;
`;

const Title = styled.h2`
font-size: 1.5rem;
font-family: 'Girassol', cursive;
`;

const Date = styled.p`
color:blue;
font-weight:bold;
font-family: 'Girassol', cursive;

`;
const Para = styled.p`
margin: 10px;
font-family: 'Indie Flower', cursive;
`;
const ApodCard = props => {
    // console.log(props);
  

    return (
 
        <WrapperDiv>
         <HeaderDiv>
         <Title>{props.title}</Title>
          <Date>{props.date}</Date>
               
          </HeaderDiv>
         <ContentDiv>
            <Image src={props.image} alt={props.title} />
            <Para>{props.exp}</Para>
          </ContentDiv>
        </WrapperDiv> 
    
    );
};

export default ApodCard;

