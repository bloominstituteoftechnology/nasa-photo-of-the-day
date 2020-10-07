import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Picture from './Picture';
import Body from './Body';
import Details from './Details';

//https://api.nasa.gov/planetary/apod?api_key=LabCyKL7gIyHaawiEtA52wYBzwYer6GcZWpgDBEx

function App(props) {
	const [ nasaData, setNasaData ] = useState([]);
	useEffect(() => {
		axios
			.get('https://api.nasa.gov/planetary/apod?api_key=LabCyKL7gIyHaawiEtA52wYBzwYer6GcZWpgDBEx')
			.then((res) => {
				console.log(res.data);
				setNasaData(res.data);
			})
			.catch((err) => {
				debugger;
			});
	}, []);
	console.log('nasadata1', nasaData);

	return (
		<div className="App">
			<Picture data={nasaData} />
			<Body data={nasaData} />
			<p>
				Read through the instructions in the README.md file to build your NASA app! Have fun{' '}
				<span role="img" aria-label="go!">
					🚀
				</span>!
			</p>
		</div>
	);
}

export default App;
