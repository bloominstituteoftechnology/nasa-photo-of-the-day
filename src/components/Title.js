import React from "react"

import styled from "styled-components"

const Headtitle = styled.div`
    
    color: blue;
    font-size: 5em;
    margin: 0;
  
    width: 100%;

   


`;


export default function Title(props){

    const {title} = props;

    return (

        
        <Headtitle>{title}</Headtitle>
        
    )




}