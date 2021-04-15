// import App from './App.js';
import React from 'react';
import sytled from 'styled-components';

const h1Style = style `

`;
 function Head(props) {
    const {data} = [props]

    if(!data) return <h2>Loading...</h2>;
    return (
        <>
        <h1 className="root">`${data.title}` </h1>
        </>
    )
}

export default Head;