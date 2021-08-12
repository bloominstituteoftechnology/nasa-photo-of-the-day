import React from 'react'

import styled from 'styled-components'

const StyledExp = styled.div`
    p {
        margin-left: 15%;
        width: 70%;
        color: ${pr => pr.theme.secondaryColor}
    }
`

function Explanation(props) {
    const { explanation } = props

    return (
        <StyledExp>
            <p>Description: </p>
            <p>{explanation}</p>
        </StyledExp>
    )
}


export default Explanation