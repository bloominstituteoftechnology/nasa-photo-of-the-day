import React from 'react';

function Title(props) {
    return (
        <>
            <h3>{props.spaceData.title}</h3>
            <p>{props.spaceData.date}</p>
        </>
    )
}

export default Title;