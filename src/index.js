import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {themeProvider} from "styled-components"
import theme from "./theme"

ReactDOM.render(
<themeProvider theme={theme}>
    <App />
</themeProvider>,
document.getElementById("root")
);
