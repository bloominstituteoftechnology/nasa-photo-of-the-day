import React from 'react';
import styled from 'styled-components';

//styled components
const ImgCont = styled.div`
  margin: 0 auto;
  width: 810px;
  height: 536px;
  border: 5px solid #20c20e;
`;

export default function Image(props) {
  return (
    <ImgCont>
      <img src={props.image} width={'800px'} />;
    </ImgCont>
  );
}
