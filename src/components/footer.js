import React from 'react'
import styled from 'styled-components';


const StyledIntro = styled.div`
    color: ${props => props.theme.accentColor};
`

export default function Footer({copyright}) {
  


    return (
        <StyledIntro className='containerImage'>
            <p>{ copyright }</p>
            {/* <img src='../logo512.png' /> */}
            
        </StyledIntro>
    )


}