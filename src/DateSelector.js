import React, { useState, useEffect } from 'react'

import './DateSelector.css'
import styled, { keyframes } from 'styled-components'

const DateSelectorWrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    input{
        margin: 1rem ;
    }
    button{
        width: 50px;
        height: 25px;
        font-size: 2rem;
        background: #222;
        font-style: italic;
        color: rgba(249,249,249,0.6);
        text-shadow: 2px 2px 3px rgba(255,255,255,0.6);
        }

       label{
        animation-duration: 3s;
        animation-name: slidein;
        animation-iteration-count: 1;
        font-weight: bold;
       }
       @keyframes slidein {
        from {
            margin-left: 0%;
            width: 300%;
        }

        to {
            margin-left: 82%;
            width: 100%;
        }
        }
`

export default function DateSelector(props){ 
    const { setToday, setDate } = props

 return (

     <DateSelectorWrapper>
        <label>Want to see another date?</label>
        <input type='date' onChange={event => setDate(event.target.value)}></input>
        <button onClick={event => setToday(false)}>Go!</button>
     </DateSelectorWrapper>
 )   
}