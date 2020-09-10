import React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import theme from "./theme";
import "./index.css";

render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
