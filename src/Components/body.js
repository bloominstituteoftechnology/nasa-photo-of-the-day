// import App from 'App.js';
import React from 'react';
import styled from 'styled-components';

const styleP = styled.p`
margin: 5px;
padding: 3px;
width: 75%;
color: grey;
text-align: center;
line-height:  1.5;
`;
const divBody = styled.div`
width: 75%;
text-align: center;
`;



function Body(props) {
    const {data} = props

    if(!data) return <h3>Loading...</h3>;

    return (
        <divBody>
        <h4>{data.title}</h4>
        <img src={data.url} alt='space thing'></img>
        <styleP><b>Explination:</b> {data.explanation} </styleP>
        </divBody>
    )

    
}

export default Body;