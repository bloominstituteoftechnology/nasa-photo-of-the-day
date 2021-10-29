import React from 'react'
import styled from 'styled-components'
const DateStyle = styled.div`

color: green;
font-size: 0.5rem;
`


export default function Date({date}){
    return <DateStyle>
        <h2>{date}</h2>
         </DateStyle>
}
 