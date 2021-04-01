/** @format */

import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';
// API Key Import
import { BASE_URL, API_KEY } from './components/constants/constants';
// Child Import
import PhotoOfTheDay from './components/PhotoOfTheDay/PhotoOfTheDay';

function App() {
	const [photoOfTheDay, setPhotoOfTheDay] = useState([]);
	useEffect(() => {
		Axios.get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
			.then((response) => {
				setPhotoOfTheDay(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<section>
			<PhotoOfTheDay
				date={photoOfTheDay.date}
				url={photoOfTheDay.url}
				description={photoOfTheDay.explanation}
				title={photoOfTheDay.title}
				mediaType={photoOfTheDay.media_type}
			/>
		</section>
	);
}

export default App;
