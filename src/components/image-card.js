import React from "react";
import styled from "styled-components";


const CardContainer = styled.div`
    background: RGBA(255,255,255,.85);
    display: flex;
    justify-content: center;
    width:70%;
    border-radius: 5px;
    margin-bottom: 70px;

`

const ContentContainer = styled.div `
    display: flex;
    flex-direction: column;
    Width: 80%;
    padding-top: 5%;
    padding-bottom: 4%;
    align-items: center;
`

const TitleAndPhotographer = styled.div `
display:flex;
justify-content: center;
align-items: center;
`

const AstronomyImage = styled.img`
    // align-self: center;
    width: 80%;
    height: 50%;
    object-fit: scale;
    flex-shrink: 2;
    justify-content:center;
    align-item:center;


`

const ImageTitle = styled.h1`
    color: black;
    margin-right:20px;
`



const ImagePhotographer = styled.h3` 
    color: #555555;

`

const ImageInfo = styled.p` 
    color: Black;
    line-height:25px;
    font-size:20px;
    margin-top: 0px;
`




const ImgCard = props => {
    return (
        <CardContainer className = "Card-Container">
            <ContentContainer className = "Content-Container">
                <AstronomyImage alt="Outer Space" src = {props.url}></AstronomyImage>
                    <TitleAndPhotographer className = "title-and-photographer">
                        <ImageTitle>{props.title}</ImageTitle>
                        <ImagePhotographer>• {props.copyright}</ImagePhotographer>
                    </TitleAndPhotographer>
                <ImageInfo>{props.explanation}</ImageInfo>
            </ContentContainer>
        </CardContainer>
    );
};

export default ImgCard;