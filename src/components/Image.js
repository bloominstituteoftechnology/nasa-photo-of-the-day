import React from 'react'
import styled from 'styled-components';

const StyledImage = styled.div`
img{
    border-radius: 10%;
    border: 5px solid ${props=>props.theme.black};

&:hover {
  border:5px solid ${props=>props.theme.tertiaryColor};
  transform: scale(1.1);
}
}
`

export default function Image (props){
return(
    <StyledImage>   
        <img src = {props.img} alt="space and stars nasa"/>
    </StyledImage>
)
}
