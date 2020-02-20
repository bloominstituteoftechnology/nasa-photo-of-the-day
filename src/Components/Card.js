import React from 'react';
import styled from 'styled-components'

const MainImg = styled.img`
 width: 50%;
 height: 60vh;
 border-radius: 15px;
`
const Paragraph = styled.p`
color: blue;
width: 50%;
font-size: 1.5rem;
margin: 5% auto;
line-height: 2;
`
const Author = styled(Paragraph)`
font-size: 1.5rem;
color: red;

`
const Copyright = styled(Paragraph)`
color: blue;
`

const Card = props => {
    return (
        <div>
            <h2>{props.title}</h2>
            <div>
                <MainImg src = {props.imgUrl}></MainImg>
            </div>
            <Author>
                Copyright: 
                <Copyright>{props.author}</Copyright>
            </Author>
            <p>{props.date}</p>
            <div>
                <Paragraph>{props.explanation}</Paragraph>
            </div>
           
            
        </div>
    );
};

export default Card;