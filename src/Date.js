import React from 'react'

import styled from 'styled-components'

const StyledDate = styled.div`
    color: red;
`

function Date(props) {
    const { date } = props

    return (
        <StyledDate>
            <p>{date}</p>
        </StyledDate>
    )
}


export default Date