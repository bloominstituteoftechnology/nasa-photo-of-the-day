import React from 'react';
import './DayPhoto.css';

const DayPhoto = props => {
    return (
        
        <div class="background-container" style={{backgroundImage: `url(${props.image})`}}>
            {/* <img src={props.image} alt="" /> */}
            <h1>NASA Photo of the Day</h1>
        <h2>{props.title}</h2>
        <h3>Date: {props.date}</h3>        
        <p>{props.explanation}</p>

        
        
        </div>
    );
};

export default DayPhoto;