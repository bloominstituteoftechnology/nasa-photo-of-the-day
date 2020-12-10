import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
background: black;
`

const PhotoWrapper = styled.div`
display:flex; 
align-items: center; 
justify-content:center; 
flex-direction:column; 
width: 70vw;
margin: 0 auto;
`

const Introduction = styled.h1`
color: white;
`
const Description = styled.p`
color: white;
`
const PhotoBlock = styled.img`
width: 40%; 
`

const Contents = (props) => {
    const { photo, explanation } = props

    return (
        <Background>
            <PhotoWrapper>
            <Introduction>NASA Photo of the Day</Introduction>
            <PhotoBlock src={photo}/>
            <Description>{explanation}</Description>
        </PhotoWrapper>
        </Background>
    )
}

export default Contents;