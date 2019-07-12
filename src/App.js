import React from "react";
import styled from "styled-components";
import "./App.css";

import Header from "./components/Header";
import Intro from "./components/Intro";
import DatePick from "./components/DatePick";
import Footer from "./components/Footer";

const BodyContainer = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  margin: 0 auto;
  color: white;
`;

function App() {
  return (
    <div className="App">
      <Header />
      <BodyContainer>
        <Intro />
        <DatePick />
      </BodyContainer>
      <Footer />
    </div>
  );
}

export default App;
