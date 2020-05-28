import React, { useState } from 'react';
import './Images.css';

function Images(props) {
    const [image, setImage] = useState([])
    console.log('from Images', props)
    return (
        <div className='imageContainer'>
            <img src={props.img.url} alt='random space photo'></img>
            <p className='imageInfo'>{props.img.explanation}</p>
        </div>
    )
}


export default Images;