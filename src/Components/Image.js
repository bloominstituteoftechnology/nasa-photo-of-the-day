import React from 'react';
import ModalImage from 'react-modal-image';
import ReactPlayer from 'react-player';

function Image({ imgUrl, title, hdurl, mediaType }) {
  if (mediaType === 'image') {
    return (
      <div className='image_container' id='scroll-to'>
        <ModalImage
          small={imgUrl}
          large={hdurl}
          alt={title}
          className='small_img'
        />
      </div>
    );
  } else {
    return (
      <ReactPlayer
        url={imgUrl}
        className='react-player'
        id='scroll-to'
        controls={true}
        playing
        width='50%'
        height='100%'
      />
    );
  }
}
export default Image;