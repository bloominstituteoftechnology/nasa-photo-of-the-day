// import App from './App.js';
import React from 'react';
import styled from 'styled-components';

const h1Style = styled.h1 `
font-weight: bold;
font-size: 1.2rem;
color: grey;
text-align: center;
`;


 function Head(props) {
    const {data} = [props]

    if(!data) return <h2>Loading...</h2>;
    return (
        <>
        <h1Style className="root">`${data.title}` </h1Style>
        </>
    )
}

export default Head;