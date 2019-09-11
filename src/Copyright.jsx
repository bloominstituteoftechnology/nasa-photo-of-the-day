import React from 'react';

function Copyright (props) {
    return (
        <p>(c) {props.copyrightOwner} ({props.copyrightDate})</p>
    );
}

export default Copyright;