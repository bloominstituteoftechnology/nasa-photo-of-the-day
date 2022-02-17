import React from "react";

const NasaVid = (props) => {
  return <iframe src={props.video} frameborder='0' height='300' width='400' allow='autoplay; encrypted-media' allowFullScreen title='video' />
};

export default NasaVid;



