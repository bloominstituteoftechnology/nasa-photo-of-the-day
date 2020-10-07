import React from 'react';

const Body = (props) => {
	return (
		<div>
			<h2>{props.data.title}</h2>
			<h2>{props.data.date}</h2>
			<h2>{props.data.copyright}</h2>
			<p>{props.data.explanation}</p>
		</div>
	);
};

export default Body;
