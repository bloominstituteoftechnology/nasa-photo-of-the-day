import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

require('dotenv').config();
const api_key = process.env.REACT_APP_API_KEY;

export const MainContext = createContext();

const MainContextProvider = (props) => {
	const [date, setDate] = useState('');
	const [explanation, setExplanation] = useState('');
	const [url, setUrl] = useState('');
	const [title, setTitle] = useState('');
	const [media, setMedia] = useState('');

	useEffect(() => {
		axios
			.get(
				`https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${date}`
			)
			.then((response) => {
				setDate(response.data.date);
				setExplanation(response.data.explanation);
				setUrl(response.data.url);
				setTitle(response.data.title);
				setMedia(response.data.media_type);
				console.log(response.data);
			})
			.catch((error) => console.log(error));
	}, [date]);

	return (
		<MainContext.Provider
			value={{ date, setDate, explanation, url, title, media }}
		>
			{props.children}
		</MainContext.Provider>
	);
};

export default MainContextProvider;
