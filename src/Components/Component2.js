import React from 'react';

const ComponentTwo = props => {
    return (
        <div className="nasa-card" key={props.explanation}>
            <img className="nasa-img" alt="nasa img" src={props.hdurl}/>

        </div>
    )
}