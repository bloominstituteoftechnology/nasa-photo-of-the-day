import React from 'react'
import styled from 'styled-components';

const StyledTitle = styled.div`
h2{
    color:${props=>props.theme.secondaryColor};
    font-size: 3rem;
    margin: 1rem;
    border: 2px solid palevioletred;
  border-radius: 3px;
    &:hover {
      transform: scale(1.1);
    }
    
}
`

function Title(props){
return(
    <StyledTitle>
        <h2>
            {props.title}
        </h2>
    </StyledTitle>
)
}
export default Title;