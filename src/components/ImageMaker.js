import React from 'react';

function ImageMaker (props){
    const { astroImage } = props;

    return (
        <div className='imageContainer'>
            {<img src={astroImage}></img>}
        </div>
    )
}

export default ImageMaker;