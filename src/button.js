import React from "react"
import "./button.css";
import ReactDOM from "react-dom";
import App from "./App";


export default function Button(props) {

  const { data } = props;

  return (
    <>
       <button class="button" type="button" >Click Me Button Two!</button>
    </>
  )
}


