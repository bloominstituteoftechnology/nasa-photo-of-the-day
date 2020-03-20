import React from 'react';

const PictureCard = props => {
    console.log(props);
    return(
            <div className = "imageList" >
           
            <img alt='picture of the day from Nasa.' src={props.hdurl}/>
            </div>


       
    );
};
console.log(PictureCard);

export default PictureCard;