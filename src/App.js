import React, { useState, useEffect } from "react";
import "./App.css";
import Photo from "./Components/photo"

export default function App(){
  return(
    <div className="card">
      <p><strong>NASA Pic of the Day</strong></p>
      <Photo />
    </div>
  )
}