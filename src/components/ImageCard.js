import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageCard = () => {
	const [ image, setImage ] = useState([]);
	useEffect(() => {
		axios
			.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
			.then((response) => {
				const imageInfo = response.data;
				console.log(imageInfo);
				setImage(imageInfo);
			})
			.catch((error) => {
				console.log('the data was not displayed', error);
			});
	}, []);

	return (
		<div className="container">
			<img className="image" src={image.url} />
			<div className="image-info">
				<h2>Title: {image.title}</h2>
				<h3>Credit: {image.copyright}</h3>
				<p>About this image: {image.explanation}</p>
			</div>
		</div>
	);
};

export default ImageCard;
