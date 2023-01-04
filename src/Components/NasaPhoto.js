import React from 'react'


const NasaPhoto = (props) => {
    return(
      <div className='Nasa-image-wrapper'>
        <h1 className='Main-title'>{props.Data.title}</h1>
        <h3 className='Date'>{props.Data.date}</h3>
        <img src = {props.Data.hdurl} alt = 'An image os a galaxy that is far far away'/>
        <p className='Detailed-report'>{props.Data.explanation}</p>
        <h5 className='copyright'>Credit: {props.Data.copyright}</h5>
      </div>
    )
}

export default NasaPhoto