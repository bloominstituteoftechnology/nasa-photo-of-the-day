import React from "react";

import "./MainContainer.css";
import styled from "styled-components";



const MainDivStyled = styled.div`
background-color: yellow;

`

const MainContainer = (props)=>{
    console.log("debug1",props)
    return(
        
        <MainDivStyled>
            <h1>Title: {props.title}</h1>
            <img src={props.image} alt={props.title}/>
    <p>Description: {props.explanation}</p>
        </MainDivStyled>
    )
}

export default MainContainer;