import React from "react";
import Button from "./Button"
import styled from 'styled-components'

const StyledPhoto = styled.div`
h3 {
    color: red;
}

img {
    width: 50%;
    justify-content: center;
}

p {
    color: skyblue;
}

Button {
    color: blue;
    background-color: black;
    width: auto;
}
`

const PhotoContainer = ({title, date, url, explanation, copyright}) => {
    return (
    <div>
        
        <StyledPhoto>
        <h3>{title}<br></br>{date}</h3>
        <img src={url} alt="nasa-pic"/>
        <p>{explanation}</p>
        <p>{copyright}</p>

        <Button />
        </StyledPhoto>
        
    </div>
    )
}

export default PhotoContainer;