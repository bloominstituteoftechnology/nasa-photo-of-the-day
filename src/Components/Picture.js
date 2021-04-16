import React from 'react'
import styled from 'styled-components'

const StyledPicture = styled.div`
    background-color: #337099;
`

const Picture = (props) => {
    const {image}=props
    return (
        <StyledPicture>
            <img src={image} alt='' />
        </StyledPicture>
    )
}

export default Picture