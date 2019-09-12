import React from "react";
import styled from "styled-components";


const CardContainer = styled.div`
    background: RGBA(187,187,187,.8);
    display: flex;
    justify-content: center;
    width:80%;
    border-radius: px;
    margin-bottom: 70px;

`

const ContentContainer = styled.div `
    display: flex;
    flex-direction: column;
    Width: 80%;
    padding-top: 4%;
    padding-bottom: 4%;
`

const AstronomyImage = styled.img`
    align-self: center;
    width: 80%;
    height: 500px;
    object-fit: scale;
    flex-shrink: 2;
    justify-content:center;
    align-item:center;


`

const ImageTitle = styled.h1`
    color: black;
`



const ImagePhotographer = styled.h3` 
    color: Black;
`

const ImageInfo = styled.p` 
    color: Black;
`




const ImgCard = props => {
    return (
        <CardContainer className = "Card-Container">
            <ContentContainer className = "Content-Container">
                <AstronomyImage alt="Outer Space" src = {props.url}></AstronomyImage>
                <ImageTitle>{props.title}</ImageTitle>
                <ImagePhotographer>-{props.copyright}</ImagePhotographer>
                <ImageInfo>{props.explanation}</ImageInfo>
            </ContentContainer>
        </CardContainer>
    );
};

export default ImgCard;