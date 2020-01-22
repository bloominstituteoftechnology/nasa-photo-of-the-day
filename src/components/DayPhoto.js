import React from 'react';

const DayPhoto = props => {
    return (
        
        <div>
        <h2>Date: {props.data.date}</h2>
        <p>Description: {props.data.explanation}
        </p>
        </div>
    );
};

export default DayPhoto;