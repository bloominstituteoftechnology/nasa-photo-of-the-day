import React from 'react';
import styled from 'styled-components';
import Button from './Button'

const Head = styled.header`
background: radial-gradient( #ffba08 2%, #03071e 80%);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 1.5rem;
font-family: 'Orbitron', sans-serif;
color: #03071e;
margin: 0;
z-index: 1000;
position: sticky;
top: 0;
`


export default function Header (props) {
   
    return(
        <Head>
            <h1>DATE:{props.date}</h1>
            <Button photo={props.photo} title={props.title}/>
        </Head>
    )
}