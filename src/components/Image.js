import React from "react";



const Image = (props) => {
    const {imageState, imageUrl} = props;
    
    return (
        <>
        <div className='image-container'>
            <img className='nasa-image' src={imageUrl} alt="nasa" style ={imageState === true ? {display: "flex"} : {display: "none"}}/>  
        </div>
        </>
        
    )
}

export default Image;