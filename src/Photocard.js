import React from 'react'

function Photocard(props) {
    const { caption, image } = props

    return (

        <div>
            <img src={image} alt={caption}/>
            <p>
            {caption} 
            </p>
        </div>
    );
}

export default Photocard; 