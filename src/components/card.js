import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import PhotoCard from './PhotoCard.js';
import style from 'styled-components';

function App() {
	const [photoOfTheDay, setPhotoOfTheDay] = useState({});

	useEffect(() => {
		axios
			.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY') // NOT FINISHED
			.then(res => {
				setPhotoOfTheDay(res.data);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	if (!photoOfTheDay) return <h3>Loading...</h3>;

	const PageTitle = style.h1`
  color: red;
`;

	return (
		<div className="App">
			<PageTitle>NASA Photo of the Day</PageTitle>
			<PhotoCard photoOfTheDay={photoOfTheDay} />
		</div>
	);
}

export default App;