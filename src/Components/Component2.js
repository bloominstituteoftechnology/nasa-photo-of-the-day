import React from 'react';

const ComponentTwo = props => {
    return (
        <div className="nasa-card" key={props.explanation}>
            <img className="nasa-img" alt="nasa img" src={props.hdurl}/>
            <h2>{props.title}</h2>
        </div>
    )
}

export default ComponentTwo;