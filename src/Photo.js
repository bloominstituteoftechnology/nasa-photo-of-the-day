import React from 'react';

const Photo = (props) => {
	console.log(props);
	return (
		<div>
			<h1>{props.title}</h1>
			<img src={props.url} alt="Nasa Selfie" />
			<p>{props.explanation}</p>
			<p>{props.date}</p>
		</div>
	);
};
export default Photo;
