import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components"
import themeobj from "./compoenets/theme/theme"

ReactDOM.render(
    <ThemeProvider theme={themeobj}>
        <App />
    </ThemeProvider >, document.getElementById("root"));
