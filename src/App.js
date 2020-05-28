import React from "react";
import "./App.css";
import Photo from "./Components/photo"

export default function App(){
  return(
    <div className="card">

      <h1>NASA</h1>
      <h2>Amazing Photo of the Day</h2>

      <Photo />

    </div> 
  )
}