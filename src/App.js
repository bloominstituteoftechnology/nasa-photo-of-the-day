import React from "react";
import Card from "./components/card component/Card.js";
import styled, { ThemeProvider } from "styled-components";

const theme = {
  primaryColor: "#3420AF",
  white: "rgb(235, 235, 235)",
};

const StyledApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.primaryColor};
  
  * {
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <Card />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
