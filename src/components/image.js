import React from 'react'
import styled, { keyframes } from 'styled-components';

const kf = keyframes`
    50% {
        transform: scale(0.8);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
`

const StyledImage = styled.div`
    img {
        border: 10px solid ${props => props.theme.darkGrey};
        width: 50%;
        transition: all 0.2s ease-in-out;
        &:hover {
            transition: all 0.2s ease-in-out;
            border: 10px solid ${props => props.theme.tertiaryColor};
            transform: scale(1.05);
        }
    }

    
`


export default function Image({todaysImage}) {
   

    return (
        <StyledImage className='containerImage'>

            <img src={todaysImage} alt={`NASA's APOD Not Working`} />
                       

        </StyledImage>
    )


}