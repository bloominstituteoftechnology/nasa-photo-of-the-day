import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`

margin: 50px;
display: flex;
justify-content: space-around;

`

function Header (props) {

    const { photoDate, photoTitle } = props

    return (
        <StyledHeader>
            <h2>Photo Title: {photoTitle}</h2>
            <h2>Date: {photoDate}</h2>
        </StyledHeader>
    )
}

export default Header