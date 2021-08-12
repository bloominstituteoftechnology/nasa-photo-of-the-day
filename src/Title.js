import React from 'react'

import styled from 'styled-components'

const StyledTitle = styled.div`
    h1{
        color: royalblue;
    }
    h2 {
        color: ${pr => pr.theme.primaryColor};
        &:hover{
            transform: rotate(-10deg);
            font-size: 250%;
        }
    }
`

function Title(props) {
    const { title } = props

    return (
        <StyledTitle>
            <h1>NASA Photo of the Day</h1>
            <h2>{title}</h2>
        </StyledTitle>
    )
}

export default Title