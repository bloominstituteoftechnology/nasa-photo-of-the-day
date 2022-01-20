import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {ThemeProvider} from 'styled-components';
import Theme from "../DOM-I/Theme";

ReactDOM.render(<App />, document.getElementById("root"));

render(
    <ThemeProvider theme={Theme}>
        <App />
    </ThemeProvider>
    document.querySelector('#root')
)
