import React from 'react'
import styled from 'styled-components';


const StyledFooter = styled.div`
    color: ${props => props.theme.accentColor};
`

export default function Footer({copyright}) {
  


    return (
        <StyledFooter className='containerImage'>
            <p>{ copyright }</p>
            {/* <img src='../logo512.png' /> */}
            
        </StyledFooter>
    )


}