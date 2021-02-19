import React from 'react';

function NasaPic(props) {
    return (
    <>
        <img alt={props.spaceData.title} src={props.spaceData.hdurl} width={600} height={300} />
    </>
    )
}
export default NasaPic;