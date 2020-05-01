import React from "react";
import "./post.css";

export default function PostDesc(props){

	return(

		<div className="postDescDiv">

			<p className = "postDesc"

			onMouseEnter = {(e) => {
				e.target.style.color = "skyblue";
				e.target.style.transition = '1s';
			}}

			onMouseLeave ={(e) => {
				e.target.style.color = 'white';
				e.target.style.zIndex = 0;
			}}

			>

			{props.desc}

			</p>

		</div>

		)
}