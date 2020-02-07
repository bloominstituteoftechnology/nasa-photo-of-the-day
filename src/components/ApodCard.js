import React from 'react'

const ApodCard = (props) => {
    return (
        <div className="apod-info">
            <div>  {props.title}</div>
            <div>{props.date}</div>
            <div>{props.copyright}</div>
            <img src= {props.hdurl} alt="anything"/>
            <div>{props.explanation}</div>

        </div>
    );
};
export default ApodCard;


