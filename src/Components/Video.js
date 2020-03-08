import React from "react";

function Video(props) {
  if (props.media_type === 'video') {
    return (<iframe width="640" height="480" src={props.src} title='new_title'></iframe>)
  } else {
    return (<img src={props.hdurl} width="640" height="480" alt='new_alt'></img>)
  }
}

export default Video;