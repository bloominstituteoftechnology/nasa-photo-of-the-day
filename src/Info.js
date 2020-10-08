import React from 'react'
import styled from 'styled-components'



const StyledInfo = styled.div`
color:blue;


`;

export default function Info(props){
    const {copywrite, date, explanation} = props

    return(
        <StyledInfo>
            <span>{copywrite}</span>
    <span>{date}</span>
    <p>{explanation}</p>
        </StyledInfo>
    )
}

