import React from 'react';

export const Photo = ({ date, explanation, title, url}) => (

    <div className="photo-div">
        <h1>{title}</h1>
        <img className="photo-img" src={url} alt="Pic of the day" />
    </div>
)

export default Photo;