import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from './theme/theme'

const GlobalStyle = createGlobalStyle`
    body{
        color: ${props => props.theme.fontColor};
        background: ${props => props.theme.backgroundColor};
    }
`

ReactDOM.render(
    <ThemeProvider theme={theme} ><GlobalStyle /><App /></ThemeProvider >,
    document.getElementById("root")
     );
