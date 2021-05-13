import React from 'react';
import styled from 'styled-components';



const Title = styled.h3`
    font-size: 1.5rem;
    color: #E4C9B6; 
`;
const Pstyle = styled.p`
    letter-spacing: 2;
    ling-height: 2;
    width: 75%;
    margin: auto;
    padding: 4%;
    color: #E4C9B6;
`;
const Img = styled.img`
    width: 55%;
    height: 55%;
    margin: auto;
    box-shadow: 3px 3px 4px 3px black;
`;


function Body(props) {
    const {data} = props

    if(!data) return <h3>Loading...</h3>;

    return(
        <div>
            <Title>{data.title}</Title>
            <Img className='image' src={data.url} alt='Space Thing'></Img>
            <Pstyle><b>Explanation:</b> {data.explanation}</Pstyle>
        </div>
    )
}

export default Body