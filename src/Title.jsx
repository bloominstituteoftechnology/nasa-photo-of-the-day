import React from 'react';

function Title (props) {
    return (
        <h2>{props.photoDate}: {props.titleText}</h2>
    );
}

export default Title;