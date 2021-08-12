import React, { useState, useEffect } from 'react'

import './DateSelector.css'
import styled from 'styled-components'

const DateSelectorWrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
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