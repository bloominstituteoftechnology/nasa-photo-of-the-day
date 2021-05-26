import React from 'react';

const NasaImage = props => {

    const { nasaPhotoUrl, nasaPhotoTitle } = props;

    return (
        <div className="nasaPhoto">
            <img src={nasaPhotoUrl} alt={nasaPhotoTitle}></img>
        </div>
    )
}

export default NasaImage;