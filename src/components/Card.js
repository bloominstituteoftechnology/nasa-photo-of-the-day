import React from 'react'
import icon from '../assets/icons/planet-earth.svg'

const Card = ({ setView }) => {
    return (
        <div className="Card">
            {/* <img src={icon} alt="Planet Earth Icon" /> */}
            <i>🌎</i>
            <h4>APOD:</h4>
            <h3>Astronomy Picture of the Day</h3>
            <p>Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</p>
            <button onClick={() => setView('APOD')}>Explore this space 👩‍🚀</button>
        </div>
    )
}

export default Card;