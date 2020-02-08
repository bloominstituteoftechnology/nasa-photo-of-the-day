import React from 'react';
import styled from "styled-components";

const Body = styled.body`
    background-image: url("./images/planet-581239_1280.jpg");
`;

const RedText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Image = styled.img`
    width: 50%
`;

const Paragraph = styled.p`
    width: 50%;
    border: solid;
    

`;

const Cardcreator = props => {
    console.log(props.data)
    return (
        <Body>
            <RedText>
                <h1>{props.data.title}</h1>
                <p>{props.data.date}</p>
                <Image src = {props.data.url} alt = ""></Image>
                <Paragraph>{props.data.explanation}</Paragraph>
            </RedText>  
        </Body>
        
    );
}

export default Cardcreator;
