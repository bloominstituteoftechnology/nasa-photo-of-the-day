import React from 'react';

export default function PhotoHeader(props) {
    const { title, date } = props;

    return (
        <div className='photoHeader'>
            <div className='title'>
                <h2>{title}</h2>
            </div>
            <div className='date'>
                <h3>{date}</h3>
            </div>
        </div>
    )
}
