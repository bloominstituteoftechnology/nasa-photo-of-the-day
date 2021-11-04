import React from "react";
import styled from 'styled-components';

const StyledDiv = styled.div `
    border: 20px ;
    padding: 5%;
    margin: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 62.5%;
    background: #12577D;
    border-radius: 10px;

    img {
        object-fit: cover;
        width: 100%;
    }
`



const BigComponent = (props) => {
    const {nasaAPI} = props;
    return (
         <StyledDiv>
            <img src= {nasaAPI.hdurl}></img>
            <h1>Date : {nasaAPI.date} </h1>
            <h2>Copyright :{nasaAPI.copyright} </h2>
            <h2>Explanation :{nasaAPI.explanation} </h2>
         </StyledDiv>

  )
}

export default BigComponent;