import React, { useState } from 'react';

export function MediaType(props){
    // let { mediaType } = props;
    const [isVideo, setIsVideo] = useState('')
    
    const vid = props => (
            <iframe 
                width="853"
                height="480"
                src={props.url}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
      );

    const pic = props => (
            <img src={props.url} />
      );
        
    
    
    if(props.media_type === "video"){
        setIsVideo(vid)
    }
    else{
        setIsVideo(pic)
    }
    return(
        { isVideo ?  vid() : pic()  } 
    )
}