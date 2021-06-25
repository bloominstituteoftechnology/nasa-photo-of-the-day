import React, { useEffect, useState } from 'react';
import styled from 'styled-components'

const CardHeaderWrapper = styled.div`
  color: black;
  background-color: grey;
  border: 5px solid black;
  border-radius: 8px;
  margin: 20px;
`;

const CardHeader = (props) => {

    const { title } = props

  return (
    <CardHeaderWrapper className='card-header'>
        <h1>Astronomy Photo Of The Day</h1>
        <h2>{title}</h2>
    </CardHeaderWrapper>
  );
};

export default CardHeader;