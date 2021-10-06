import React from 'react';

function Description({ close, explanation }) {
  return (
    <div className='modal'>
      <div className='close' onClick={close}>
        &times;
      </div>
      <div className='content'>{explanation}</div>
    </div>
  );
}

export default Description;