import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
    
    height: 10vh;
    background: #f7f7f7;
    h1 {
        padding-top: 1.7%;
        font-size: 4rem;
        font-weight: 200;
    }
`

const Header = () => {

    return (
        <StyledHeader>
            <h1>Photo Of The Day</h1>
        </StyledHeader>
    )
}

export default Header;