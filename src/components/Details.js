import React from 'react';

export default function Details(props) {
    const { explanation, copyright } = props;

    return (
        <div className='detailsContainer'>
            <h3>Explanation: </h3>
            <p className='explanation'>{explanation}</p>
            <p className='copyright'>Copyright: {copyright}</p>
        </div>
    )
}