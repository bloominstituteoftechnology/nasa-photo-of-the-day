import React from 'react';
import styled, {keyframes} from 'styled-components';
const kd = keyframes`
100% {
    opacity: 1;
}

`


const Heade = styled.div`
opacity: 0;
animation: ${kd} 0.5s ease-out forward;
background-color: ${props => props.theme.primaryColor};
color: ${props => props.theme.fontColor};
border: 1px solid #d2d2d2;
box-shadow: ${props => props.theme.boxShadow};
border-radius: 8px;
margin-top: 16px;
padding: 16px;
`

export default function Header(props){
 return (

     <Heade>
        <h1>{props.title}</h1>

     </Heade>
 )

}
