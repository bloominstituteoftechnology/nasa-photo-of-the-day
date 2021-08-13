import React from 'react'
import styled from 'styled-components'

const StyledDetails = styled.div`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`

export default function Copyright(props) {
    const { copyright } = props;
    return (
        <StyledDetails>
            <p className='copyright-section'>copyright info: {copyright}</p>
        </StyledDetails>
    )
}