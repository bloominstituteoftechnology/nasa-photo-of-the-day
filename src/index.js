import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// day 2
import {ThemeProvider} from 'styled-components'
import theme from '../package.json'

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
document.getElementById("root"));
