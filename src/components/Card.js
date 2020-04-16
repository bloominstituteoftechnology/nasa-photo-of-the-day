import React, { useState } from 'react';

const Card = props => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.date}</p>
            <div>
                <img src = {props.imgUrl}></img>
            </div>
            <div>
                <p>{props.explanation}</p>
            </div>
        </div>
    );
};

export default Card; 