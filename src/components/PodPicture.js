import React from "react";

export default function PodPictue(props){
    console.log(props.media_type)
    return(
        <div className={props.cName}>
            { props.media_type === 'video' &&
            <iframe
            width="100%"
            height="100%"
            type={props.media_type}
            src={props.media_src}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
            }
            {
                props.media_type === 'image' && 
                <img height="100%" alt="could not load img" src={props.media_src}></img>
            }
            
        </div>
    )
}