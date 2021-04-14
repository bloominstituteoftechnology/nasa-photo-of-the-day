import React, {useState, useEffect} from 'react'

import styled, {keyframes} from 'styled-components'


const kf = keyframes`

100% {
    opacity: 1;
}

`

const StyledPicture = styled.div`
    display: flex;
    justify-content: center;
   

        img {
            opacity: 0;
            animation: ${kf} 1s ease-in-out forwards;
            padding: 5%;
            width: 60%;
        }
`

const Picture = (props) => {


    return (
        <StyledPicture>
            <img src={props.data.url} alt={props.data.title}></img>
        </StyledPicture>
    )
}

export default Picture;