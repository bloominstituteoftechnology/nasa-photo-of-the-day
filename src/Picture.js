import React from 'react'
import styled from 'styled-components'



const StyledPicture = styled.img`

    &:hover{
        transform: scale(1.15);
        transition: all 0.5s ease-in-out
        border:5px solid blue;
    }

`;



export default function Picture(props) {

    const {source} = props

    return(
        <div className="spacePic">
            <StyledPicture alt="space pic" src={source}></StyledPicture>
            </div>
    )

}