import React from 'react';
import './PictureDetails.css';

function PictureDetails(props) {
    const { pictureDetails } = props;
    return (
        <div className="picture-details">
            <h2>{pictureDetails.title}</h2>
            {
                pictureDetails.media_type === 'image' && <img src={pictureDetails.url} alt="APOD" />
            }
            {
                pictureDetails.media_type === 'video' && <div className="video-wrapper"><iframe src={pictureDetails.url} title={pictureDetails.title}></iframe></div>
            }
            <p>{pictureDetails.explanation}</p>
        </div>
    );
}

export default PictureDetails;