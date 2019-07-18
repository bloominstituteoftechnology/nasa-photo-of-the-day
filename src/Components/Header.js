import React from "react";
import ship from "../images/ship.png";


export default function Header ({date}) {
  return (
      <div className = "header">
          <h1>🚀 NASA Photo of the Day 🚀</h1>
          <h3>{date}</h3>
      </div>
  )

}
