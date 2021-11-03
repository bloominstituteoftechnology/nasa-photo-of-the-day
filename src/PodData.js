import React from 'react';

const podData = props => {
    return (
        <div className = 'podData' key={props.data}>

            <img className='img' src={props.Img}/>

        </div>
    )
}