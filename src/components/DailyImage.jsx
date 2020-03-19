import React from 'react'
import styled from 'styled-components'


const DailyImage = ({imageData}) => {
    console.log(imageData);
    
    const StyledImage = styled.img`
    border-radius 8px;
    height: auto;
    width: 90vw;
    `
    
    return (
        <>
            <StyledImage src={imageData} alt='Daily NASA Photo'/>
        </>
    )
}

export default DailyImage
