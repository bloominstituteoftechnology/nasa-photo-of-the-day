import React from 'react';
import styled, {keyframes} from 'styled-components';
const kl = keyframes`
100% {
   opacity: 1;
}

`

const Body = styled.div`
opacity: 0;
animation: ${kl} 0.5s ease-out forward;
background-color: ${props => props.theme.dar};
color: ${props => props.theme.white};

`
  
export default function Main(props){
    
 return (
    <Body>
        
     <img src = {props.image} alt = ""/>
     <p> {props.info}</p>
    </Body>
        
 )



}