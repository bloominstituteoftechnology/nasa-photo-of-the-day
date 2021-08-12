import React from 'react'

import styled from 'styled-components'

const StyledExp = styled.div`
    p {
        margin-left: 15%;
        width: 70%;
    }
`

function Explanation(props) {
    const { explanation } = props

    return (
        <StyledExp>
            <p>{explanation}</p>
        </StyledExp>
    )
}


export default Explanation