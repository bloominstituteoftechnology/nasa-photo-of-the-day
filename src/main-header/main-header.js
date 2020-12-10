import React from 'react';
import './main-header.css';

const MainHeader = (props) => {
  const { date } = props.image
  // const dateArray = image.date.split('-');
  // const prettyDate = new Date(dateArray[0], dateArray[1], dateArray[2])
  // console.log(reformattedDate);
  return (
    <h1>
      NASA's Image Of The Day for {date}
    </h1>


  );
};

export default MainHeader