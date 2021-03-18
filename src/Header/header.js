import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
    background-color: black;

    div{
        color:white;
    }
    h1{
        background-color: black;
    }
`
function Header () {
    return (
        <StyledContainer>
            <div>
                <h1>Astronomy Picture of the Day</h1>
                <a href="archivepix.html">Discover the cosmos! </a>
                Each day a different image or photograph of our fascinating universe is
                featured, along with a brief explanation written by a professional astronomer.
            </div>
        </StyledContainer>
        
    )
}
export default Header