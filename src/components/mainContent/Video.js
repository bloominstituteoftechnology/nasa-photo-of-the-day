import React from "react";

function Video(props){
    return(
        <div><iframe src={`${props.url}`} width="1280px" height="720px" alt=""/></div>
    )
}
export default Video;