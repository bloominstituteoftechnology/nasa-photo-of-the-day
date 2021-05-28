import React from 'react';
import styled from 'styled-components';


const StyledNasaImage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 65%;
    img {
        max-height: 90%;
    }
`

const NasaImage = props => {

    const { nasaPhotoUrl, nasaPhotoTitle } = props;

    return (
        <StyledNasaImage className="nasaPhoto">
            <img src={nasaPhotoUrl} alt={nasaPhotoTitle}></img>
        </StyledNasaImage>
    )
}

export default NasaImage;