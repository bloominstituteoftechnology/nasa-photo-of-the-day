import React from 'react';

const PictureCard = props => {
    return(
        <div>
            <img alt='picture of the day from Nasa.' src={props.imgUrl}/>


        </div>
    )
}

export default PictureCard;