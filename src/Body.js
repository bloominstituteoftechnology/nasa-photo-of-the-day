import React from 'react';
import styled from 'styled-components';

const Exp = styled.p `
font-family: 'Press Start 2P', cursive;
color: #ffba08;
font-size: 1.8rem;
line-height: 200%;
letter-spacing:.5rem;
`
const Title = styled.h1`
color: #ffba08;
font-size: 3rem;
font-family: 'Press Start 2P', cursive;

margin: 0;
grid-column: 1;
grid-row: 1;
z-index: 1;
text-transform: uppercase;
animation: glow 2s ease-in-out infinite alternate;
text-align: center;


@keyframes glow {
    from {
      text-shadow: 0 0 20px #2d9da9;
    }
    to {
      text-shadow: 0 0 50px #34b3c1, 0 0 30px #4dbbc7;
    }}
`
const Scroll = styled.div`
animation: scroll 120s linear forwards;
animation-duration: infinite;
position: relative;



@keyframes scroll {
    from { 
        top : 0; 
        transform: translateZ(0) rotateX(20deg); 
    }
    to {
        top: -7500px;
        transform: translateZ(-2500px) rotateX(21deg); 
    }
}
`

const Divdiv = styled.div`
display: flex;
height: 100%;
width: 70%;
margin: 0 auto;
/* perspective: 450px; */
`

export default function Body (props) {
       
    return (
        <div class='bod'>
        <Divdiv>
            <Scroll>
            <Title>{props.title}</Title>
            <Exp>{props.explanation}</Exp>
            </Scroll>
        </Divdiv>
        </div>
    )
}