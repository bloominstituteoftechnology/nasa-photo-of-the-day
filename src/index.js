import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { render } from "react-dom";

import './App.css'

import {ThemeProvider} from 'styled-components'
import theme from "./theme/index.js";

render (
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>,
 document.getElementById("root"));


