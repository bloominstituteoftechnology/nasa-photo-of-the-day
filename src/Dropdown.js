import React, { useState, useEffect } from "react";
import "./App.css";


export default function DropDown() {

    return (

        <div className="container">
  <button type="button" class="button">
    ☰
  </button>
  <div class="dropdown">
    <ul>
      <li>01/04/2021</li>
      <li>01/03/2021</li>
      <li>01/02/2021</li>
      <li>01/01/2021</li>
    </ul>
  </div>
</div>

    )
}