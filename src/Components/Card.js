import React from 'react';

const Card = props => {
    return (
        <div>
            <h1>{props.title}</h1>
            <div>
                <img src = {props.imgUrl}></img>
            </div>
            <div>
                <p>{props.explanation}</p>
            </div>
            <p>{props.date}</p>
            
        </div>
    );
};

export default Card;