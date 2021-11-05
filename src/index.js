import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

import{ThemeProvider} from 'styled-components';
import theme from './theme';

render{
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
    document.querySelector('#root')
}