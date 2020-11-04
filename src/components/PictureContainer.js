import React from 'react';

const PictureContainer = (prop) => {
    const {photoData} = prop;
    return(
        <div id='PictureContainer'>
            <img src={photoData.url} alt={photoData.title} />
            
        </div>
    )
}

export default PictureContainer;