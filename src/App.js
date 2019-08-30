import React, { useState, useEffect } from 'react';
import './App.css';
import Heading from './Heading';
import axios from 'axios';
import Photo from './Photo';

function App() {
	const [ data, setData ] = useState(null);

	useEffect(() => {
		axios
			.get('https://api.nasa.gov/planetary/apod?api_key=yTBbxf9ISWIbQzv7fbY8beTdJHWUhEwH1IdhtVck')
			.then((res) => {
				console.log(res.data);
				setData(res.data);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="App">
			<form className="search-form" />
			<input className="search-bar" type="text" />
			<button className="search-button" text="submit">
				Search
			</button>
			<Heading />

			{data ? (
				<Photo title={data.title} url={data.url} explanation={data.explanation} date={data.date} />
			) : (
				<div>Loading</div>
			)}
		</div>
	);
}

export default App;
