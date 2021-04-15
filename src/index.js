import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from 'styled-components'
import theme from './theme/index'

export const NASA_URL = 'https://api.nasa.gov/planetary/apod?api_key=asy7YloHliKheX3kKzh4LYH6oMJL7Wkv4aYdvB9C'

ReactDOM.render(
<ThemeProvider theme={theme}><App /></ThemeProvider>, 
document.getElementById("root"));
