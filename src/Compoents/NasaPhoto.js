import React from 'react'

const NasaPhoto = (props) => {
    return (
        <div className='nasa-photo-wrapper'>
        <h3>{props.photo.title}</h3>
         <p>{props.photo.data}</p> 
         <img src={props.photo.hdurl} />
         <p className='pe'>{props.photo.explanation}</p>
         </div>
    )}

    export default NasaPhoto;