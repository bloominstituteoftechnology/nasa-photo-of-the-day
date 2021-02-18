import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './picture.css';

const Picture = props => {
    const {pictureUrl} = props;    

    return (
        <div>
        <img className='Nasa' src ={pictureUrl} alt="its a random"/>
        </div>
    )
}

export default Picture;
