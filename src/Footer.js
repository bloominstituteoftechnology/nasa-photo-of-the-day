import React from 'react';
import styled from 'styled-components';

const Foot = styled.p`
background: linear-gradient(#03071e, #ffba08);
margin:0;
color: #ffba08;
font-family:'Orbitron', sans-serif;
padding-bottom: 8%;

`


export default function foot (props){

    
    return (
        <footer>
           <Foot> {props.copyright} &copy;</Foot>
        </footer>
    )
}