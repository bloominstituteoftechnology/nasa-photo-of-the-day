import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from 'styled-components';

import theme from './theme/index';

import styles from './index.css';

ReactDOM.render(
<ThemeProvider theme={theme}>
    <App />
</ThemeProvider>, 
document.getElementById("root"));
