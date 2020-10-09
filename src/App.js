import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Picture from './Picture';
import Body from './Body';

function App(props) {
	const [ nasaData, setNasaData ] = useState([]);
	useEffect(() => {
		axios
			.get('https://api.nasa.gov/planetary/apod?api_key=f3CoPyGXLpvzo0qvVplXS5OKifiR7CSOQ7aKt8Jc')
			.then((res) => {
				console.log(res.data);
				setNasaData(res.data);
			})
			.catch((err) => {
				console.log('failed to get');
				// debugger;
			});
	}, []);
	console.log('nasadata1', nasaData);

	return (
		<div className="App">
			<Picture data={nasaData} />
			<Body data={nasaData} />
		</div>
	);
}

export default App;
