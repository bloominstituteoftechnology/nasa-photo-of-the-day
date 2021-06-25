import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

const CardPhotoWrapper = styled.img`
  background-color: grey;
  border: 5px solid black;
  border-radius: 8px;
  margin: 20px;
`;

const CardPhoto = (props) => {
    const { imageURL } = props

    return (
    <div className='card-photo'>
        <CardPhotoWrapper
            alt='card photo'
            className='card-image'
            src={imageURL}
        />
    </div>
  );
};

export default CardPhoto;