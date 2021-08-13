import React from 'react'
import styled from 'styled-components'


const StyledTitle = styled.h1`
    font-size: 1.5em;
    color: #4b59f7;
    /* display: flex; */
    /* flex-wrap: wrap; */
    align-items: center;

`
const InfoSec = styled.div`
    color: royalblue;
    padding: 10px 0;
    background: lightcoral;
`

export default function Title(props) {
    const { title } = props;
    return (
        <InfoSec>
            <StyledTitle className='picture-title'>The Title of the Picture: {title}</StyledTitle>
        </InfoSec>
    )
}