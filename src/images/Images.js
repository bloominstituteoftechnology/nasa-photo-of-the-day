import React from 'react';
import './Images.css';

function Images(props) {
    console.log('from Images', props)
    return (
        <div className='imageContainer'>
            <img src={props.img.url} alt='random outerspace'></img>
            <p className='imageInfo'>{props.img.explanation}</p>
        </div>
    )
}


export default Images;