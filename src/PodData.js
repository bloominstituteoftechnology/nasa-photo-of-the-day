import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  width: 75%;

  margin: 0 auto;
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
  width: 75%;


`

const PodData = props => {
    return (
        <Div className = 'podData' key={props.data}>
<Head> NASA Photo of The Day </Head>
            <H2>{props.title}</H2>
            <Image className='img' src={props.Img} alt=''/>
            <p>{props.date}</p>
            <p>{props.version}</p>
            <p>{props.explanation}</p>
            <button><a href={props.url}>View Image</a></button>
            
        </Div>
    );
};

export default PodData;