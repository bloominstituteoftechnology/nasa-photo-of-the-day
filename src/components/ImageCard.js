import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageCard = () => {
	let dateObj = new Date();
	let month = dateObj.getUTCMonth() + 1;
	let day = dateObj.getUTCDate();
	let year = dateObj.getUTCFullYear();

	let newDate = `${year}-${month}-${day}`;
	console.log('current day', newDate);

	const [ image, setImage ] = useState([]);
	const [ date, setDate ] = useState(newDate);

	useEffect(
		() => {
			axios
				.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
				.then((response) => {
					const imageInfo = response.data;
					console.log(imageInfo);
					setImage(imageInfo);
				})
				.catch((error) => {
					console.log('the data was not displayed', error);
				});
		},
		[ date ]
	);

	return (
		<div className="container">
			<img className="image" src={image.url} />
			<div className="image-info">
				<h2>Title: {image.title}</h2>
				<h3>Credit: {image.copyright}</h3>
				<p>About this image: {image.explanation}</p>
				<label>
					Choose Date: <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
				</label>
				<input type="submit" value="Submit" />
			</div>
		</div>
	);
};

export default ImageCard;
