import React from 'react';

export default function Img(props) {
    if (!props.src) return <h3>Loading...</h3>;

    return <img className='picture' src={props.src}/>
}  