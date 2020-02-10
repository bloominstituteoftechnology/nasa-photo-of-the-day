import React from 'react';
import styled from 'styled-components';

const LoaderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: relative;
`;
function Loader() {
  return (
    <LoaderDiv>
      <img
        src='https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'
        alt='Loading'></img>
    </LoaderDiv>
  );
}
export default Loader;
