import React, {useState, useEffect} from 'react';
import Image from "./image";
// import Info from "./info";

const ImageContainer = (props)=>{
    const {hdurl} = props;

    return (
        <div className='image-container'>        
            <div>
                
            </div>
            <div>
                <Image image={hdurl} />
            </div>
        </div>
    )
};

export default ImageContainer;