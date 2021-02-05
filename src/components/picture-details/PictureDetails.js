import React from 'react';
import './PictureDetails.css';
import styled from 'styled-components';

const StyledPictureDetails = styled.div`
    width: 100%;
    max-width: 700px;
    background: #fff;
    padding: 0 20px 20px;
    margin: 50px 0;
    border-radius: 50px;

    img {
        width: 100%;
    }

    .video-wrapper {
        position: relative;
        padding-bottom: 56.25%;
        height: 0;
    }

    iframe {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }

    p {
        line-height: 1.5;
    }
`;

function PictureDetails(props) {
    const { pictureDetails } = props;
    return (
        <StyledPictureDetails>
            <h2>{pictureDetails.title}</h2>
            {
                pictureDetails.media_type === 'image' && <img src={pictureDetails.url} alt="APOD" />
            }
            {
                pictureDetails.media_type === 'video' && <div className="video-wrapper"><iframe src={pictureDetails.url} title={pictureDetails.title}></iframe></div>
            }
            <p>{pictureDetails.explanation}</p>
        </StyledPictureDetails>
    );
}

export default PictureDetails;