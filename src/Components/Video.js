import React from "react";

function Video(props) {
  if (props.media_type === 'video') {
    return (<iframe width="420" height="315" src={props.src} title='new_title'></iframe>)
  } else {
    return (<img src={props.hdurl} width="420" height="315" alt='new_alt'></img>)
  }
}

export default Video;