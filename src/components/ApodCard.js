import React from 'react';

const ApodCard = props => {
    return (
        <div className='apodCard'>
            <h2>{props.title}</h2>
            <img className='apodImage' alt='Astronomy Image of the Day' src={props.url}/>
            <p>{props.explanation}</p>
            <p>{props.date}</p>
        </div>
    );
};

export default ApodCard