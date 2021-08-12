import React from 'react'

import styled from 'styled-components'

const StyledCopy = styled.div`
    color: ${pr => pr.theme.primaryColor};
`;

function Copyright(props) {
    const { copyright } = props

    return (
        <StyledCopy>
            <p>{copyright}</p>
        </StyledCopy>
    )
}


export default Copyright