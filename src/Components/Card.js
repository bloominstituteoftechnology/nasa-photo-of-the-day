import React from 'react';

const Card = props =>{
    const {imgInfo} = props;
    console.log(imgInfo);

    return(
        <div>
            <img src = {imgInfo.hdurl} />
        </div>
    );
}

export default Card;