import React from 'react'
import ImageList from './images'

const PicCard = (props) => {
    console.log(props, 'props from the picture cards')

    return (
        <div className='pictureCard'>
            <img src= {props.src} alt='a pic of the day'/>
            <p>{props.discription}</p>
            <h2>{props.date}</h2>
            <h3>{props.copy}</h3>

        </div>
    )
}

export default PicCard