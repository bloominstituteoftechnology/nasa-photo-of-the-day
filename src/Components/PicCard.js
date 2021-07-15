import React from 'react';

export default function picCard(props) {
    console.log('Make it so!');
    return (
        <div>
            <h1>{props.title}</h1>
            <img src={props.url} alt='Space...the final frontier...' />
            <p>{props.explanation}</p>
            <p>Date: {props.date}</p>
        </div>
    );
}