import React from 'react'
import styled, { keyframes } from 'styled-components'


const bounce = keyframes` 
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  
  `

//styling
const StyledDownArrow = styled.div`
 animation: ${bounce} infinite 2s;
 
 img{
     width: 75px;
 }

`

const DownArrow = props => {

    return (
    <StyledDownArrow>
         <img 
            src="https://vectr.com/alexjwilliams/abbcJZg9f.svg?width=250&height=200&select=abbcJZg9fpage0" width="50"/>
    </StyledDownArrow>
    
    )
}

export default DownArrow

