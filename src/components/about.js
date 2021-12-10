import React from 'react'
import styled from 'styled-components';


const StyledAbout = styled.div`
    
    color: ${props => props.theme.primaryColor};
    h3 {
        color: ${props => props.theme.accentColor};
    }
    .aboutSection {
        padding-left: 15%;
        padding-right: 15%;
    }
`

export default function About ({about}) {
    



    return (
        <StyledAbout className='about'>   
            <h3>About the Photo:</h3>         
            <p className='aboutSection'>{ about }</p>
        </StyledAbout>
    )
}