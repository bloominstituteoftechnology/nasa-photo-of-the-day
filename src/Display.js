import React from "react"
import styled from "styled-components";

const StyledDiv = styled.div`
border-radius:20px;
border: 2px solid black;
margin:5rem 20rem 10rem 20rem;
padding:30px;
display:flex;
flex-direction:column;
background-color:white;
font-size:calc(9px + 2vmin);

`
const Display = ({ title, explanation, url, copyright }) => {

return (
    <StyledDiv>
        <h2>{title}</h2>
        <img src={url} alt={title} />
        <h4>By: {copyright} </h4>
        <p>{explanation}</p>
    </StyledDiv>
    );
}

export default Display;