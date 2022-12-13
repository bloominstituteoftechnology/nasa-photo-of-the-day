import React from 'react';

function NasaPic(props) {
    console.log(props.spaceData.media_type);
    if (props.spaceData.media_type === 'image') {
        return (
            <img alt={props.spaceData.title} src={props.spaceData.hdurl} width={600} height={300} />
        )
    }
    else {
        return (
            <iframe 
            title={props.spaceData.title} src={props.spaceData.url} width={600} height={300}>
            </iframe>
        )
    }
}
export default NasaPic;