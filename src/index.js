import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import themeObj from "./theme";
import "./index.css";

ReactDOM.render(
  <ThemeProvider theme={themeObj}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
