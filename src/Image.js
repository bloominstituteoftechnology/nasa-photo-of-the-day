import React from 'react'

import styled from 'styled-components'

const StyledImage = styled.div`
    width: 500px;
`

function Image(props) {
    const { url } = props

    return (
        <div>
            <StyledImage>
                <img src={url}></img>
            </StyledImage>
        </div>
    )
}


export default Image