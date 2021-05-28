import React from 'react'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 10;
  }
`
const StyledPhoto = styled.div`
    animation: 1s ${fadeIn} ease-out;
    transform: scale(1.1);
img{
    border-radius: 50%;
    object-fit: size-down;
}
h2{
    font-weight: bold;
    font-size: 40px;
}
p{
    font-size: 20px;
    color: #4F5165;
}
`

const Photo = ({ title, date, url, explanation, copyright }) => {
    return (
        <StyledPhoto>
            <h2>{title}<br></br>{date}</h2>
            <img src={url} alt='NASA Photo of the Day' />
            <p>Description:<br></br>{explanation}</p>
            <p>Copyright:<br></br>{copyright}</p>
        </StyledPhoto>
    );
}
export default Photo