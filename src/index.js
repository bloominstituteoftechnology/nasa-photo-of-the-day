import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import themeObj from "./styles/index.css";
import { ThemeProvider } from "styled-components";
import "./styles/index.css";

ReactDOM.render(
  <ThemeProvider theme={themeObj}>
    <App />
  </ThemeProvider>,
  document.querySelector("#root")
);
