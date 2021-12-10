import React from 'react'

 function Card({image, date, title, copyright, explanation }) {
    return (
        <div className='card-container'>
            <h2>{title}</h2>
            <img src={image} alt='Nasa APOD'/>
            <div className='explanation'>
                <p>{explanation}</p>
            </div>
            <p>{`${copyright} © `}{date}</p>
        </div>
    )
}

export default Card;
