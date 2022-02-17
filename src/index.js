import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ThemeProvider } from "styled-components";
import App from "./App";
import theme from './Theme'

ReactDOM.render(
<ThemeProvider theme={theme}>
    <App />
</ThemeProvider>
, document.getElementById("root"));
