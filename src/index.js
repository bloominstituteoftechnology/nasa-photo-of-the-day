import React from "react";
import "./index.css";
import App from "./App";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from './theme'

render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
    document.querySelector("#root")
);
