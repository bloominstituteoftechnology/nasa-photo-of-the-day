import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import theme from './components/theme';
import { ThemeProvider } from 'styled-components';

render(
  <ThemeProvider theme={theme}>
      <App />
  </ThemeProvider>,
document.querySelector("#root"));
