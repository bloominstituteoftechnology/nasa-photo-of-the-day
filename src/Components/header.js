// import App from './App.js';
import React from 'react';

 function Head(props) {
    const {data} = [props]

    if(!data) return <h3>Loading...</h3>;
    return (
        <>
        <h1 className="root">`${data.title}` </h1>
        </>
    )
}

export default Head;