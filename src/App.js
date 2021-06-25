import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios' 
import styled from "styled-components";


function App() {
	const [photoData, setPhotodata] = useState(null);
	useEffect(() => {
		axios
			.get(
				"https://api.nasa.gov/planetary/apod?api_key=EYpMqg3J4DtJJuJfOR7VyJDVWOY3O6kq1iGlRtV5"
			)
			.then((res) => {
				setPhotodata(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	if (!photoData)
		return (
			<div>
				<h1>Loading....⏳⏳⏳</h1>
			</div>
		);

	return (
		<div className="App">
			<Title>{photoData.title}</Title>
			<Photo src={photoData.hdurl} alt="potd" />
			<Text>{photoData.explanation}</Text>
			<Button onClick={()=>{console.log('hello')}}>Get todays photo!!</Button>
		</div>
	);
}

const Title = styled.h1`
	font-size: 4rem;
	color: darkblue;
`;

const Photo = styled.img`
	height: 70vh;
	max-width: 1600px;
`;

const Text = styled.p`
	margin: 0 auto;
	width: 80%;
	padding-top: 20px;
	line-height: 1.3rem;
`;

const Button = styled.button`
	padding: 20px;
	border-radius: 15px;
	margin-top: 15px;
	background-color: white;
	font-size: 1.5rem;
	cursor: pointer;
`;

export default App;
