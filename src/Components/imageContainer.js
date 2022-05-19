import React, {useState, useEffect} from 'react';
import Image from "./image";
import Info from "./info";

const ImageContainer = (props)=>{
    const {hdurl, data} = props;

    return (
        <div className='image-container'>        
            <div>
                <Image image={hdurl} />
                <Info data={data} />
            </div>
        </div>
    )
};

export default ImageContainer;