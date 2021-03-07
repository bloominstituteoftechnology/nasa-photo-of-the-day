import React from 'react';
import styled, {keyframes} from 'styled-components';
import theme from "./Theme";

const kf = keyframes`
100%{
    opacity: 1;
}
`

export const HeaderText = styled.div`
background-color: ${props => props.theme.primaryColor};
font-weight: bold;
color: ${props => props.theme.black};
&:hover {
    color: ${props => props.theme.white};
}
opacity: 0;
animation: ${kf} 0.5s ease-out forward;
`


export default function Header(props){

return (
    <HeaderText>
        <h1>{props.title}</h1>
        </HeaderText>
)



}
