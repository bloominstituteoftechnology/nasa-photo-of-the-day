import React from 'react';
import styled from 'styled-components';
import Media from './Media';
import Text from './Text';

const MainSection = styled.section`
    display: flex;
    flex-direction: column;
    margin: 1em;
    align-items: center;
`;


export default function Main(props){
    const { nasaData } = props;

    return(
        <MainSection>
            <Media url={nasaData.url} mediaType={nasaData.media_type}/>
            <Text title={nasaData.title} explanation={nasaData.explanation}/>
        </MainSection>
    )
}