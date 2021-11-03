import React from 'react';

const PodData = props => {
    return (
        <div className = 'podData' key={props.data}>

            <img className='img' src={props.Img} alt=''/>
            <h1>{props.data}</h1>
            <p>{props.title}</p>
            <p>{props.version}</p>
            <p>{props.explanation}</p>

        </div>
    );
};

export default PodData;