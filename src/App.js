import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import ImageList from './components/ImageList';

function App() {
	useEffect(() => {
		axios
			.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log('the data was not displayed', error);
			});
	}, []);
	return (
		<div className="App">
			<p>Read through the instructions in the README.md file to build your NASA app! Have fun 🚀!</p>
			<ImageList />
		</div>
	);
}

export default App;
