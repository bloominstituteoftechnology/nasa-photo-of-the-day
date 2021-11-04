import React from 'react';

const PodData = props => {
    return (
        <div className = 'podData' key={props.data}>

            <h1>{props.title}</h1>
            <img className='img' src={props.Img} alt=''/>
            <p>{props.date}</p>
            <p>{props.version}</p>
            <p>{props.explanation}</p>
            <button><a href={props.url}>View Image</a></button>
            
        </div>
    );
};

export default PodData;