import React from 'react';

const ComponentTwo = props => {
    return (
        <div className="nasa-card" key={props.id}>
            <img className="nasa-img" alt="nasa img" src={props.hdurl}/>
            <h3>{props.date}</h3>
            <h2>{props.title}</h2>
            <p>{props.explanation}</p>
            <p>{props.copyright}</p>
        </div>
    )
}

export default ComponentTwo;