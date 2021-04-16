import React from 'react'
import styled from 'styled-components'

const StyledBody = styled.div`
    display:flex;
    flex-direction:column;
`

const Body = (props) => {
    const {title, explanation, date}=props
    return (
        <StyledBody>
            <h1>{title}</h1>
            <p>{explanation}</p>
            <p>{date}</p>
        </StyledBody>
    )
}

export default Body