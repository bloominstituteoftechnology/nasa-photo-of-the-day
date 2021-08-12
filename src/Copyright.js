import React from 'react'

import styled from 'styled-components'

const StyledCopy = styled.div`
    color: ${pr => pr.theme.tertiaryColor};
`;

function Copyright(props) {
    const { copyright, date } = props

    return (
        <StyledCopy>
            <p>Copyright: {copyright}, {date}</p>
        </StyledCopy>
    )
}


export default Copyright