import React from "react";
import styled from 'styled-components';

const ColorH2 = styled.h2`
    color: rgb(58, 135, 199);
    font-family: sans-serif;
    font-size: 1.8rem;
`

const ColorH1 = styled(ColorH2)`
    font-size: 2.5rem;
`
const TextWrapper = styled.p`
    text-align: justify;
    text-indent: 20px;
    line-height: 1.4rem;
    max-width: 70%;
    column-count: 2;
    column-gap: 40px;
    margin: 0 auto;
    border: 1px dashed blue;
    padding: 10px 10px;
`

const ImageTag =styled.img`
    width: 70%;
    margin-bottom: 10px;
`

const PhotoContainer = (props) => {
   
    console.log(props);
    
    
    return (
        <section>
            <ColorH1>{props.data.title}</ColorH1>
            <ColorH2>{props.data.date}</ColorH2>
            <ColorH2>by {props.data.copyright}</ColorH2>
            {
                props.data.media_type === "video"
                    ? <iframe title="nasaVideo"  src={props.data.url}></iframe>
                    : <ImageTag src={props.data.url} alt="awesome pic of space"/>
            }
            <TextWrapper>{props.data.explanation}</TextWrapper>
        </section>
    );
};

export default PhotoContainer;
