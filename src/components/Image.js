import React from 'react';


export default function Image({title, photo, date, details}){

    if (!photo) return <h3>Loading...</h3>;

    return(
        <div className = 'image'>
            <div className='photo-container'>
                <h2>{title}</h2>
                <img src={photo} alt='Photo of the day from NASA'/>
            </div>
            <div className='photo-details'>
                <p>{date}</p>
                <p>{details}</p>
            </div>
        </div>
        
    )
}