import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

export const BASE_URL ='https://api.nasa.gov/planetary/apod'
export const API_KEY = 'DEMO_KEY'

ReactDOM.render(<App />, document.getElementById("root"));
