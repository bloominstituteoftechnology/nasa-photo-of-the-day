import React from 'react';
import styled from 'styled-components';



const Heade = styled.div`

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
