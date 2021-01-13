import React from "react";
import ReactPlayer from "react-player";
import Image from 'react-bootstrap/Image'

function GetImage({mediaType,imageUrl}){
/*For media Type image, display with img.For video display with ReactPlayer*/
    return(
        <div className="getimage">
            {mediaType==="image" && (<Image src={imageUrl} fluid alt="NASA APD" width="900vw" height="auto"/>)}
            {mediaType==="video"  && (<ReactPlayer 
                id="imageUrl"
                url={imageUrl}
                width={window.innerWidth}
                height={window.innerHeight}
                playing
            />)}
       </div>    
    )
}   

export default GetImage;
