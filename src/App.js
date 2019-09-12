import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import ImageCard from './components/ImageCard';
import styled from 'styled-components';

const AppContainer = styled.div`
	text-align: center;
	background-image: linear-gradient(to top, #249494 0%, #330867 100%);
	color: white;
`;

function App() {
	let dateObj = new Date();
	let month = dateObj.getUTCMonth() + 1;
	let day = dateObj.getUTCDate();
	let year = dateObj.getUTCFullYear();

	let newDate = month + '/' + day + '/' + year;

	const [ date, setDate ] = useState(newDate);

	console.log(newDate);
	return (
		<AppContainer>
			<h1>NASA's Picture of the Day!</h1>
			<span>Today is: {newDate}</span>
			<ImageCard />
		</AppContainer>
	);
}

export default App;
