import React from 'react';

const DataCard = props => {
    return (
        <div className='data-list' key={props.id}>
            <h2>{props.title}</h2>
            <img>{props.img}</img>
        </div>
    );
};

export default DataCard;