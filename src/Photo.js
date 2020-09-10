import React from 'react';

const Photo = props => {
    const { photo } = props;

    return (
        <div className='main-photo'>
            <img src = {photo}></img>
    <span className='caption'>{photo.text}</span>
        </div>
    );
};

export default Photo;