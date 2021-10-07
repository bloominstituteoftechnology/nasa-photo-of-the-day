import React from 'react';
import styled from 'styled-components';

const Image = styled.div`
    background-color: #c2c2c2;
    opacity: 11;
    width: 70%;
    padding: 10px;
    maargin: 0 auto;
    borderL 1rem solid #ba55d3;
    border-raduis: 2rem;
`;

const ImageConfig = styled.img`
    max-width: 90%;
    border-radius: 3rem;
`

const ParagraphDiv = styled.div `
    font-family: 'Birthstone', cursive;
    color: #800080;
    background-color: #c2c2c2;
    border: 2rem dashed #ba55d3;
    widthL 80%;
    margin: 0 auto;
    padding 6rem;
    opacity: 1.5;
    border-raduis: 2rem;
`

function Card(props) {
    console.log(props);
    if(!props.image) return <h3>Loading...</h3>;

    return (
        <Image>
            <ImageConfig
                src = {props.image}
                alt = "NASA Photo of the Day"
            />

            <ParagraphDiv>
                <p>{props.date}</p>
                <p>{props.explanation}</p>
            </ParagraphDiv>
        </Image>
    )
}

export default Card;