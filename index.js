import React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "styled-components";

import App from "./components/App";
import theme from "./theme";
import "./styles.css";

render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.querySelector("#root")
);
