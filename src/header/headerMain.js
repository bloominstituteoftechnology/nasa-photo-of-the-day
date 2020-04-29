import React, { useState, useEffect } from "react";
import "./header.css";


export default function headerMain(props) {
	return (

		<div className="headerDiv">

			<h2 className = "date">{props.date}</h2>

		</div>

		)
}