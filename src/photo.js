import React, { useState } from 'react';
import "./photo.css";
import Details from './details';

const Photo = props => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
       <div>
        {/* {props.info.explanation} */}
        <img className="images" src={props.photoInfo.hdurl} alt="Astronomy Pic" />
        <button onClick={() => setIsOpen(!isOpen)}>Toggle Info</button>
      </div>
      <div>
        { isOpen && <Details photoDate={props.currentPhotoDate} photos={props.photoInfo} />}
      </div>
    </div>  
)
}

export default Photo;