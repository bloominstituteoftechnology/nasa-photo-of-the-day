import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player'

const MediaContainer = styled.div`
    width: fit-content;
    max-width: 100%;
    background-color: gray;
    border: 1rem solid gray;
    border-radius: 10px;
`;

const NasaPicture = styled.img`
    vertical-align: middle;
    border-radius: 10px;
`;

export default function Media(props) {
    const { url, mediaType } = props;

    return (
        <MediaContainer>
            { mediaType === 'image' ?
                <NasaPicture src={url}></NasaPicture>
                : <ReactPlayer url={url}
                    playing={true} width={'60em'}
                    height={'34em'} loop={true}>
                </ReactPlayer>}
        </MediaContainer>
    )
}