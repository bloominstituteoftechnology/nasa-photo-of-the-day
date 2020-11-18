import React from 'react';

function NasaPic(props) {
    return (
    <>
        <img src={props.spaceData.hdurl} width={600} height={300} />
    </>
    )
}
export default NasaPic;