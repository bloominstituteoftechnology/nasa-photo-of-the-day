import React, {useState, useEffect} from 'react';

const Image = props =>{
    const {image} = props;

    return(
        <img src={image} />
    )
}

export default Image;