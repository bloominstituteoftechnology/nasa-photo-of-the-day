import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import "./index.css";

import App from "./App";
import theme from './theme/index';


ReactDOM.render(
    <ThemeProvider theme={theme}>
            <App />
    </ThemeProvider>,
    document.getElementById("root")
    );
