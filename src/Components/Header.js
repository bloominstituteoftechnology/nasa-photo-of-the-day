import React from 'react'
import styled from 'styled-components'
export default function Header(props) {
    const {data} = props

    const StyledContainer = styled.div`
        background-color: black;

        div{
            color:white;
        }
        h1{
            background-color: black;
        }
    `
    if (!data) return <h3>Loading...</h3>;
    return(
        <StyledContainer>
            <h1>Astronomy Picture of the Day</h1>
            <a href="archivepix.html">Discover the cosmos! </a>
            Each day a different image or photograph of our fascinating universe is 
            featured, along with a brief explanation written by a professional astronomer.
            <p>{data.date}</p>
        </StyledContainer>
    )
}