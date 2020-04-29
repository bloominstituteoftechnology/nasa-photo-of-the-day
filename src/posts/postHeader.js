import React, {useState} from "react";
import "./post.css";

export default function PostHeader(props){

	return(

		<div className="postHeaderDiv">

			<h3 className="postTitle">{props.title}</h3>

			<p className = "postDate">{props.date}</p>

		</div>

		)
}