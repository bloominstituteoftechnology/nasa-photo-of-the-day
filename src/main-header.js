import React from 'react';
import styled from 'styled-components';

//styles
const StyledMainHeader = styled.div`
  text-align: center;
  margin: 2.5rem 0;
  color: white;

`

const MainHeader = (props) => {
  const { date } = props.image
  // const dateArray = image.date.split('-');
  // const prettyDate = new Date(dateArray[0], dateArray[1], dateArray[2])
  // console.log(reformattedDate);
  return (
    <StyledMainHeader>
      <h1>
        NASA's Image Of The Day for {date}
      </h1>
    </StyledMainHeader>

  );
};

export default MainHeader