import React, { useState } from 'react';
import './Images.css';

function Images(props) {
    const [image, setImage] = useState([])
    console.log('from Images', props)
    return (
        <div className='imageContainer'>
            <img>{}</img>
            <p className='imageInfo'>This is where the information for my nasa photo will appear in all of it's glory. INFO INFO INFO INFO INFO INFO INFO INFO INFO INFO INFO</p>
        </div>
    )
}


export default Images;