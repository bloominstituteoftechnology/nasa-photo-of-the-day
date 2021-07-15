import React from 'react';
import '../App.css'; 
import  VideoPlayer  from "react-video-js-player";

const Title = (props) => {
    return (<div className="App">
    <h1>{props.title}</h1>
    <h2>{props.date}</h2>
    <iframe src={props.src} allow="encrypted-media" width='1000' height='500'  />
    <h3>{props.explanation}</h3>
    
    </div> )
}
export default Title;