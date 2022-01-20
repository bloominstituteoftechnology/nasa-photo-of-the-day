import React from "react";
import styled from 'styled-components';

const StyledPhoto = styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin-top: 20px; 
margin-left: 30px;
margin-right: 30px;
padding: 20px;
border-radius: 10px;
background-color: ${props => props.theme.primaryColor};
border: 20px solid ${props => props.theme.secondaryColor};
`

const Photo = props => {
    const { photo } = props

    return (
        <StyledPhoto className="photo">
            <img src= {photo.url} alt='dailyPhoto'></img>
'
        </StyledPhoto>
    )
}

export default Photo;