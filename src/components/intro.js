import React from 'react'
import styled from 'styled-components';



const StyledIntro = styled.div`
    padding: 2%;
    color: ${props => props.theme.primaryColor};
    h2 {
        color: ${props => props.theme.accentColor};
        padding-top: 2%;
    }
`


export default function Intro({title}) {




    return (
        <StyledIntro className='containerImage'>

            <h1>NASA's Astronomy Picture of the Day</h1>
            <h2 className='title'>{ title }</h2>

        </StyledIntro>

    )


}

