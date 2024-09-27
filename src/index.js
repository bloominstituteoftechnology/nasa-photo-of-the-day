import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Theme from "./Theme";
import { ThemeProvider } from "styled-components";

export const BASE_URL = 'https://api.nasa.gov/planetary/apod';
export const API_KEY = '3t3c6gtAO9fBSq0K2gc46eUWBPkCX6ZVjfPngwks';

ReactDOM.render(
<ThemeProvider theme={Theme}>
<App />
</ThemeProvider>
, document.getElementById("root"));
