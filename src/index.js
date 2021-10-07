import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {ThemeProvider} from "styled-components";
import theme from "./theme";
import { render } from "@testing-library/react";

ReactDOM.render(
    <ThemeProvider them={theme}>
        <App />
    </ThemeProvider>,
    document.getElementById("root")
);
