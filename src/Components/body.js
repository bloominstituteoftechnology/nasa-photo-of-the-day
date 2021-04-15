// import App from 'App.js';
import React from 'react';
import styled from 'styled-components';

const styleP = styled.p`
margin: 3%;
padding: 2%;
width: 75%;
color: grey;
text-align: center;
`;
const divBody = styled.div`
width: 75%;
display: flex;
justify-content: space-around;
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