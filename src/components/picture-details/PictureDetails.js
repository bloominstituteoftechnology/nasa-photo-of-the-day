import React from 'react';
import './PictureDetails.css';

function PictureDetails(props) {
    const { pictureDetails } = props;
    return (
        <div className="picture-details">
            <h2>{pictureDetails.title}</h2>
            <img src={pictureDetails.url} alt="APOD" />
            <p>{pictureDetails.explanation}</p>
        </div>
    );
}

export default PictureDetails;