import React from "react";
import  { BrowserRouter } from 'react-router-dom'
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
export const BASE_URL = 'http://localhost:3000/'
export const API_KEY = 'o7jKQvygnJOvu1pb4RZ1AjBwknrVOuNYVIbm3aap'



ReactDOM.render(
    <BrowserRouter>
<App />
</BrowserRouter>,
document.getElementById("root"))
