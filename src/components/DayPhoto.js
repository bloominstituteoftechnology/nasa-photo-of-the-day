import React from 'react';

const DayPhoto = props => {
    return (
        
        <div>
        <h2>Date: {props.date}</h2>
        
        <p>{props.explanation}
        </p>

        <img src={props.url} alt="" />
        
        </div>
    );
};

export default DayPhoto;