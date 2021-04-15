import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import axios from 'axios';
import {ThemeProvider} from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import theme from './theme.js';

ReactDOM.render(
<ThemeProvider theme={theme}>
 <App />
 </ThemeProvider >,
document.getElementById("root")
);
