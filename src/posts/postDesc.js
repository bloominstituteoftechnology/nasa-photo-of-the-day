import React, {useState} from "react";
import "./post.css";

export default function PostDesc(props){

	return(

		<div className="postDescDiv">

			<p className = "postDesc">{props.desc}</p>

		</div>

		)
}