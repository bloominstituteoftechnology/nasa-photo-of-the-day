import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  width: 75%;
  margin: 0 auto;
  margin-bottom: 1em;
`

const H2 = styled.div`
  font-size: 2rem;
  font-weight: bold;
  font-family: monaco;
`
const Head = styled.h1`
  font-weight: bold;
  font-size: 5rem;
  border-bottom: 2px solid black;
  letter-spacing: -1px;
`
const Image = styled.img`
  border-radius: 50px;
  width: 75vw;
`
const Button = styled.button`
  background-color: black;
  font-weight: 300;
  display: inline-block;
  padding: .4em 1.5em;
  box-sizing: border-box;
  border-radius: 2em;
  
  &:hover{
      background-color: grey;
  }

`
const Anchor = styled.a`
  text-decoration: none;
  color: #ffff;

`

const Ptag = styled.p`
  letter-spacing: .5px;
  font-size: 1em;
`

const Date = styled.p` 
  font-weight: bold;
`

const PodData = props => {
    return (
        <Div className = 'podData' key={props.data}>
            <Head> NASA Photo of The Day </Head>
            <H2>{props.title}</H2>
            <Image className='img' src={props.Img} alt=''/>
            <Date>{props.date}</Date>
            <p>{props.version}</p>
            <Ptag>{props.explanation}</Ptag>
            <Button><Anchor href={props.url}>View Image</Anchor></Button>
            
        </Div>
    );
};

export default PodData;