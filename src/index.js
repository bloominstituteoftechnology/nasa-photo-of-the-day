import React from "react";
//import ReactDOM from "react-dom";
import { render } from "react-dom";
import { ThemeProvider } from 'styled-components';

import "./index.css";
import App from "./components/App";
import theme from './theme';

render(
  <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>,
    document.querySelector('#root')
  )