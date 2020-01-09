import React from "react";
import ReactDOM from "react-dom";
import "././css/tailwind.css";
import App from "./App";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<Router><App /></Router>, document.getElementById("root"));
