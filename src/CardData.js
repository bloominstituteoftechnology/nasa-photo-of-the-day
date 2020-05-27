import React from "react";
import styled from 'styled-components';

const PhotoStory = styled.div` 
    width: 30%;
    border: 10px solid black;
    border-radius: 10px;
    padding: 5px;
    margin: 5px;
    @media screen and (max-width: 1000px) {
        width: 90%;
    }
`;

function CardData(props) {
    console.log('props from CardData', props.data)
    
    if (!props) return <p>Loading...</p>

    return ( 
        <PhotoStory>
            <p>{props.data.explanation}</p>
        </PhotoStory>

    );
}

export default CardData;
