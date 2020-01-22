import React from 'react';

const DayPhoto = props => {
    return (
        
        <div>
        <h2>{props.title}</h2>
        <h3>Date: {props.date}</h3>
        
        <p>{props.explanation}</p>

        <img src={props.url} alt="" />
        
        </div>
    );
};

export default DayPhoto;