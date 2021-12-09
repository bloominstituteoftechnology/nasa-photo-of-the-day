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

const StyledIntro = styled.div`
    img {
        border: 10px solid ${props => props.theme.secondaryColor};
        width: 50%;
        transition: all 0.2s ease-in-out;
        &:hover {
            transition: all 0.2s ease-in-out;
            border: 15px solid ${props => props.theme.tertiaryColor}
        }
    }

    
`


export default function Image({todaysImage}) {
   

    return (
        <StyledIntro className='containerImage'>

            <img src={todaysImage} alt={`NASA's Daily Image Not Working`} />
                       

        </StyledIntro>
    )


}