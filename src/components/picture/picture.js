import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './picture.css';
import ReactPlayer from 'react-player';

const Picture = props => {
    const {pictureUrl,videoUrl,media} = props;    
    if (media === 'video'){
    return (
        <div className='MainVideo'>
        <ReactPlayer url={videoUrl}/>
        </div>
    )}
    else {
    return (
        <div className='MainPicture'>
        <img className='Nasa' src ={pictureUrl} alt="its a random"/>
        </div>
    )
    }
}

export default Picture;
