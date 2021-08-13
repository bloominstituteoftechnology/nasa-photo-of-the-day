import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import ReactDOM from 'react-dom'


const kf = keyframes`
    100% {
        opacity: 1;
        transform: scale(1) rotateZ(0);
    }
`
const StyledDate = styled.div`
    color: green;
    font-weight: bold;
    opacity: 0;
    transform: scale(2) rorate(180deg);
    animation: ${kf} 1s ease-in-out forwards;
    border: 1px solid #d2d2d2;
    box-shadow: 0px 1px 6px -2px #807f7f;
    border-radius: 8px;
    margin-top: 16px;
    padding: 16px;
`


export default function Date(props) {
    const { date } = props;
    return (
        <StyledDate className='today-date'>Today: {date}</StyledDate>
    )
}