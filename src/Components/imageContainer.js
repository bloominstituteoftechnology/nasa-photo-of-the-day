import React, {useState, useEffect} from 'react';
import Image from "./image";
import Info from "./info";
import styled from 'styled-components';

const ImageDiv = styled.div`
    max-width: 70vw;
    margin: 0%;
    @keyframes imageFade {
        0% {opacity: 0;}
        25% {opacity: 0;}
        50% {opacity: 0.75;}
        100% {opacity: 1;}
    }
    animation-name: imageFade;
    animation-duration: 3s;
    background-color: #27272775;
    padding-top: 5vh;
    margin-bottom: 5vh;
    border-bottom-right-radius: 2.5vw;
    border-bottom-left-radius: 2.5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
`


const ImageContainer = (props)=>{
    const {hdurl, data} = props;

    return (
        <ImageDiv className='image-container'>   
            <Image image={hdurl} />
            <Info data={data} />
        </ImageDiv>
    )
};

export default ImageContainer;