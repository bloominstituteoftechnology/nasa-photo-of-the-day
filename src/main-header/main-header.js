import React from 'react';
import './main-header.css';

const MainHeader = (imageData) => {
  const date = imageData.date;

  return (
    <h1>
      NASA's Image Of The Day for {date}.
    </h1>


  );
};

export default MainHeader