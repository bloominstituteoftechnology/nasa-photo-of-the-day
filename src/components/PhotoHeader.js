import React from 'react';

export default function PhotoHeader(props) {
    const { title, date } = props;

    return (
        <div className='photoHeader'>
            <div className='title'>
                <h3>Title: {title}</h3>
            </div>
            <div className='date'>
                <h5>Date: {date}</h5>
            </div>
        </div>
    )
}
