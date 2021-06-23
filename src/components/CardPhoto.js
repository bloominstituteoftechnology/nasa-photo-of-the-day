import React, { useState, useEffect } from 'react';

const CardPhoto = (props) => {
    const { imageURL } = props

    return (
    <div className='card-photo'>
        <img
            alt='card photo'
            className='card-image'
            src={imageURL}
        />
    </div>
  );
};

export default CardPhoto;