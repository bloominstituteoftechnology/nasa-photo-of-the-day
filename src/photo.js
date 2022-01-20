import React from "react";
import styled from 'styled-components';

const StyledPhoto = styled.div`
display: flex;
justify-content: center;
background-color: gray;
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