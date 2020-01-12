import React, { useState, useEffect } from 'react';
import 'axios';
import Axios from 'axios';
import './Card.scss';

function Card() {
	const [ data, setData ] = useState({});
	useEffect(() => {
		Axios.get('https://api.nasa.gov/planetary/apod?api_key=cXcIYoAI1t7oszjznjyUk68HsBP3E468WHHNvPAd').then((res) =>
			setData(res.data)
		);
	}, []);

	console.log(data);
	return (
		<div className="rapper">
			<h1>{data.title}</h1>
			<h3 id="date">Date:{data.date}</h3>
			<img alt={data.title} src={data.url} />
			<p>{data.explanation}</p>
		</div>
	);
}

export default Card;
