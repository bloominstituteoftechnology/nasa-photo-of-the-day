import React from 'react';

const ComponentThree = props => {
    return (
        <div className="nasa-date" key={props.date}>
            <div className="nasa-copyright" alt="nasa copyright" src={props.copyright}/>
            <h2>{props.title}</h2>
        </div>
    )
}

export default ComponentThree;