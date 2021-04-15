// import App from './App.js';
import React from 'react';
import styled from 'styled-components';

const H1Style = styled.h1 `
font-weight: bold;
font-size: 3.2rem;
color: #bdbdbd;
text-align: center;
`;


 function Head(props) {
    const {data} = [props]

    
    return (
        <>
        <H1Style className="root">NASA Photo of the Day! </H1Style>
        </>
    )
}

export default Head;