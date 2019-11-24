import React from 'react';

const PhotoComponent = (props) => {
    console.log(props);
    return (
        <div className = 'photo'>
            <img src = {props.url} alt = 'NASA Pic' />
        </div>
    )
}

export default PhotoComponent;