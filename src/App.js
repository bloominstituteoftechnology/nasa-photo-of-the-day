import React from "react";
// import axios from "axios";
import ImageGrid from "./components/ImageGrid"
import Header from "./components/Header"
import Footer from "./components/Footer"
import styled from "styled-components"
import "./App.css";

const StyledApp = styled.div`
  text-align: center;
  background-color: black;
`;

function App() {
  return (
    <StyledApp>
      <Header />
      <ImageGrid />
      <Footer />
    </StyledApp>
  );
}

export default App;
