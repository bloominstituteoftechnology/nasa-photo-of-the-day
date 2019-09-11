import React from 'react';

const DataCard = props => {
    return (
        <div className='data-list' key={props.id}>
            <h2>{props.title}</h2>
            <img>{props.image}</img>
            <p>{props.description}</p>
            <p>{props.copyright}</p>
        </div>
    );
};

export default DataCard;