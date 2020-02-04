import React from 'react';

export const Photo = ({ date, explanation, title, url}) => (

    <div>
        <h1>{title}</h1>
        <img src={url} />
    </div>
)

export default Photo;