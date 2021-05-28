import React, { useState, useEffect } from 'react';
import "../App.css";
import styled from 'styled-components'



const ChildDivWrapper = styled.div`
  display: flex;
  justify-content: center;
  border: 3px solid green;
`;


// Child
export default function Info(props){

// const data = props.apodData; // Simply removes the need to type 'props'
    return (
        <ChildDivWrapper>
            <h1>{props.apodData.title}</h1>
            <div>{props.apodData.date}</div> {/* Cannot do props.apodData. Must be props.apodData.something. */}
            <p>{props.apodData.explanation}</p>
        </ChildDivWrapper>
    )
}