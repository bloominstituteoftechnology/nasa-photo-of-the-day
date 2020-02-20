import React from "react";

const Photo = props => {
	console.log("Props - ", props);

	return (
		<div className="PhotoContainer">
			<h2>{props.data.title}</h2>
			<h3>Date: {props.data.date}</h3>
			<img src={props.data.url} alt="NASA Photo of the day" />
		</div>
	)
};

export default Photo;