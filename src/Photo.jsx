import React from 'react';

function Photo (props) {
    return (
        <div>
            <img src={props.url} alt={props.alt} />
        </div>
    );
}

export default Photo;