// import App from 'App.js';
import React from 'react';
import styled from 'styled-components';

const StyleP = styled.p`
margin: auto;
padding: 4%;
width: 75%;
color: #bdbdbd;
text-align: center;
line-height:  1.5;
`;
const DivBody = styled.div`
width: 100%;
text-align: center;
display: flex;
flex-direction: column;
justify-content: space-around;
margin: auto;
`;
const ImgStyle = styled.img`
width: 75%;
height: 50%;
margin: auto;
padding: 5%;
`;
const H4style = styled.h4`
font-size: 2rem;
`;

function Body(props) {
    const {data} = props

    if(!data) return <h3>Loading...</h3>;

    return (
        <DivBody>
        <H4style>{data.title}</H4style>
        <ImgStyle src={data.url} alt='space thing'></ImgStyle>
        <StyleP><b>Explination:</b> {data.explanation} </StyleP>
        </DivBody>
    )

    
}

export default Body;