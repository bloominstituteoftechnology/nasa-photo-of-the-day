// import App from 'App.js';
import React from 'react';

function Body(props) {
    const {data} = props

    if(!data) return <h3>Loading...</h3>;

    return (
        <>
        <h4>{data.title}</h4>
        <img src={data.url} alt='space thing'></img>
        <p>Explination: {data.explanation}</p>
        </>
    )

    
}

export default Body;