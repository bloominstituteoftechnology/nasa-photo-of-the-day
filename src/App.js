import React from "react";
import "./App.css";
import Image from "./components/Photo";
import Header from "./components/Header";
import Info from "./components/Info";
import Title from "./components/Title";
import styled from "styled-components"

function App() {

  const Container = styled.div`
    background-color: black;
    color: white;
    height: 100vh;
  `
  return (
    <Container className="App">
      <Title />
      <Header />
      <Image />
      <Info />
    </Container>
  );
}

export default App;
