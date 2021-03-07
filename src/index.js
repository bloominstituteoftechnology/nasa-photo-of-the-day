import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import theme from "./Theme"
import {ThemeProvider} from "styled-components";

ReactDOM.render(
<ThemeProvider theme = {theme}> <App /></ThemeProvider>, 

document.getElementById("root"));
