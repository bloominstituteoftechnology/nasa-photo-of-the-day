import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

export const BASE_URL = 'https://api.nasa.gov/planetary/apod';
export const API_KEY = '3t3c6gtAO9fBSq0K2gc46eUWBPkCX6ZVjfPngwks';

ReactDOM.render(<App />, document.getElementById("root"));
