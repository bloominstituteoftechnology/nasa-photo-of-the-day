import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
    display:flex;
    justify-content: center;

    @media (max-width: 800px){
        flex-direction: column;
    }
`;
const TextContainer = styled.div`
    width: 25%;

    @media (max-width: 800px) {
        width: 100%;
    }
`;
const CardTitle = styled.h2`
    font-size: 50px;
`;
const CardImage = styled.img`
    border: 2px solid black;
`;
const CardExplanation = styled.p`
    font-size: 20px;
    margin: 0 auto;
    padding: 10%;
`;
const ApodCard = props => {
    return (
        <CardDiv className='apodCard'>
            <CardImage className='apodImage' alt='Astronomy Image of the Day' src={props.url}/>
            <TextContainer>
            <CardTitle>{props.title}</CardTitle>
            <hr></hr>
            <CardExplanation>{props.explanation}</CardExplanation>
            <p>{props.date}</p>
            </TextContainer>
        </CardDiv>
    );
};

export default ApodCard