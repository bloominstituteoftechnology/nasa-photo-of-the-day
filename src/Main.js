import React from 'react';
import styled from 'styled-components';


const Body = styled.div`

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