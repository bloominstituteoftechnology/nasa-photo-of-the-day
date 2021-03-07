import React from 'react';
import styled from 'styled-components';
import theme from "./Theme";



export const HeaderText = styled.div`
background-color: ${props => props.theme.primaryColor};
font-weight: bold;
color: ${props => props.theme.black};
&:hover {
    color: ${props => props.theme.white};
}

`


export default function Header(props){

return (
    <HeaderText>
        <h1>{props.title}</h1>
        </HeaderText>
)



}
