import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components"
import theme from "./theme/theme"

ReactDOM.render(
    <ThemeProvider theme = {theme}>
        <App />,
    </ThemeProvider>,
 document.querySelector("#root"));
