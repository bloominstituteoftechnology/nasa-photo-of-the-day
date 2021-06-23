import React, { useEffect, useState } from 'react';

const CardHeader = (props) => {

    const { title } = props

  return (
    <div className='card-header'>
        <h1>Astronomy Photo Of The Day</h1>
        <h2>{title}</h2>
    </div>
  );
};

export default CardHeader;