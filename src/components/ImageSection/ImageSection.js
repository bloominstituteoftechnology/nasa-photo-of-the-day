import React from 'react';
import './imageSection.css';
import Horses from './horses.jpg';

function ImageSection() {
    return  <div className="imageSection">
                <img src={Horses} alt="photo_of_the_day" />
            </div>
}

export default ImageSection;