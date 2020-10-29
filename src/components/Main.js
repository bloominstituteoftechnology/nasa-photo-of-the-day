import React from 'react';
import styled from 'styled-components';

const MainSection = styled.section`
    margin-top: 1em;
`;
const ImageContainer = styled.div`
    height: fit-content;
    background-color: gray;
    border: 0.5rem solid gray;
    border-radius: 2px;
`;

const NasaImage = styled.img`
    vertical-align: middle;
`;


export default function Main(props){
    const { nasaData } = props;

    return(
        <MainSection>
            <ImageContainer>
                <NasaImage src={nasaData.url}></NasaImage>
            </ImageContainer>
            
            
            <h3>{nasaData.title}</h3>
            <div>
                <p>{nasaData.explanation}</p>
            </div>
        </MainSection>
    )
}