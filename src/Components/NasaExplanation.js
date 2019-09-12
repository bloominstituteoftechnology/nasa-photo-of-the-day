import React from 'react';
import styled from 'styled-components'

const ExplanationH3 = styled.h3`
margin: 2vh;
font-size: 2rem;
font-family: 'Gayathri', sans-serif;



`;

const ExplanationP = styled.p`
margin: 2vh;
font-size: 1rem;
line-height: 1.5;
font-family: Arial;
font-family: 'Gayathri', sans-serif;


`;

const NasaExplanation = props => {
    return (
        <>
            <ExplanationH3><h3>Photo Explanation: </h3></ExplanationH3>
            <ExplanationP><p className="explanation">{props.explanation}</p></ExplanationP>
        </>
    );
};

export default NasaExplanation;