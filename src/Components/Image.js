import React from 'react';

const NasaImage = (currentStateFromParent) => {
    return <img src = {currentStateFromParent.image} alt = 'Fastest Galaxy' />
}

export default NasaImage; 