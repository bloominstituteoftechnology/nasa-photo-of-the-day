import React from "react"

import styled from "styled-components"

const Headtitle = styled.h1`
    
    color: blue;
    font-size: 5em;
    margin: 0;
    padding: 50px;
   


`;


export default function Title(props){

    const {title} = props;

    return (

        
        <Headtitle>{title}</Headtitle>
        
    )




}