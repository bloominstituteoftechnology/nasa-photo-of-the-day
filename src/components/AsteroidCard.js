import React from 'react';

const AsteroidCard = props => {
    return (
        <div className="card">
            <div className="image-container">
                <img className="space-image" alt="nebula" src={props.hdurl}/>
            </div>
            <div className="content">
                <h2>{props.title}</h2>
                <p><span>Explanation: </span>{props.explanation}</p>
            </div>
        </div>
    )
}

export default AsteroidCard;

