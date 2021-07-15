import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {ThemeProvider} from 'styled-components'
import themeObj from './theme'

//wrapping over App.js so it is accessible to all the elements
ReactDOM.render(
 <ThemeProvider theme={themeObj}>
     <App />
</ThemeProvider>,
 document.getElementById("root"));
