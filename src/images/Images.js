import React from 'react';
import styled from "styled-components";

const ImageContainer = styled.div`
width:80%;
    margin: 0 auto;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `;
const Image = styled.img`height: 400px;
    width: 70%;
    margin: 2% 0;
    `;
const ImageInfo = styled.p`
color:whitesmoke;
background-color:rgba(146, 146, 245, .15);
font-size: large;
font-weight: bold;
padding: 2%;
`;

function Images(props) {
    console.log('from Images', props)
    return (
        <ImageContainer>
            <Image src={props.img.url} alt='random outerspace'></Image>
            <ImageInfo className='imageInfo'>{props.img.explanation}</ImageInfo>
        </ImageContainer>
    )
}


export default Images;