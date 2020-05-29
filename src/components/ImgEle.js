import React from "react";
import styled from 'styled-components'


export default function ImageElement(props) {
    const StyledImg = styled.img`
    width:75%;
    box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
    border-radius: 8px;
    margin: 16px;
    padding: 16px 8px 12px 16px;
    background-color: whitesmoke;
    display:flex;
    align-items:center;
    
    

    `
    const Centered = styled.div`
    display:flex;
    justify-content:center;
    `
    return (
        <Centered className = "imagecontainer">
           <StyledImg src={props.url} alt='nasa pic' />
        </Centered>
    )
}