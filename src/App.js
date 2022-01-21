import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import PhotoCard from './components/PhotoCard';
import styled from 'styled-components';

const AppContainer = styled.div`
	text-align: center;
	background-image: linear-gradient(to right top, #ced861, #c1a24b, #a37341, #794b38, #482b29, #442328, #3f1c28, #38162a, #582150, #703381, #774dbb, #5f6dfb);
	color: #E42217;
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
			<PhotoCard />
		</AppContainer>
	);
}

export default App;