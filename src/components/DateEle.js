import React from "react";
import styled from 'styled-components';

export default function DateElement(props) {
    const StyledH5 = styled.h5`
    
    box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
    border-radius: 8px;
    width:15%;
    display:inline-block;
    padding-top:1%;
    padding-bottom:1%; 
    
    background-color: whitesmoke;
   
    
    

    `
    return (
        <StyledH5>Today's Date: {props.date}</StyledH5>
    )
}