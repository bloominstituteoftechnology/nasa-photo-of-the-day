import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import ImageCard from './components/ImageCard';

function App() {
	let dateObj = new Date();
	let month = dateObj.getUTCMonth() + 1;
	let day = dateObj.getUTCDate();
	let year = dateObj.getUTCFullYear();

	let newDate = month + '/' + day + '/' + year;

	const [ date, setDate ] = useState(newDate);

	console.log(newDate);
	return (
		<div className="App">
			<h1>NASA's Picture of the Day!</h1>
			<span>Today is: {newDate}</span>
			<ImageCard />
		</div>
	);
}

export default App;
