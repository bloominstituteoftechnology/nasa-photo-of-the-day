import React from 'react';
import styled from 'styled-components';


const TextDiv = styled.div `
    margin: 2em 0 0 0;
    background-color: gray;
    padding: 1rem 1rem 1rem 1rem;
    border-radius: 10px;
    color:  #36454f;
    max-with: 110%;
`;

const Styledh3 = styled.h3`
    font-size: 3rem;
`;

const ExplanationDiv = styled.div `
    background-color: #36454f;
    margin: 1rem;
    color: gray;
    padding: 1rem;
    border: none;
    border-radius: 10px;
    font-size: 1.5rem;
    max-width: 100%;
`

export default function Text(props){
    const { title, explanation } = props;

    return(
            <TextDiv>
                <Styledh3>{title}</Styledh3>
                <ExplanationDiv>
                    <p>{explanation}</p>
                </ExplanationDiv>  
            </TextDiv>
    )
}