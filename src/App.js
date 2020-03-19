import React from "react";
import Header from "./components/Header";
import PhotoCard from "./components/PhotoCard";
import styled from 'styled-components';

const Page = styled.div`

`;


function App() {
  return (
    <Page>
      <Header/>
      <PhotoCard/>
    </Page>
  );
}

export default App;
