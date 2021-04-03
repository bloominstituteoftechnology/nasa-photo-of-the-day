import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import styled from "styled-components";

function App() {
	const API_KEY = "uEjFKZiKGM7fqna0nF87RUGCZjH45AXCzJyF9S82";
	const months = [
		"January",
		"Feburary",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	const [data, setData] = useState({});
	const [request, setRequest] = useState(null);
	const [msg, setMsg] = useState("");

	useEffect(() => {
		axios
			.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
			.then((results) => {
				let month = parseInt(results.data.date.substring(5, 7));
				let year = parseInt(results.data.date.substring(0, 4));
				let day = parseInt(results.data.date.substring(8, 10));
				results.data.date = `${year} ${months[month - 1]} ${day}`;
				console.log(results.data);
				setData(results.data);
				setRequest(true);
			})
			.catch((error) => {
				console.log(error.results.data.message);
				setMsg(error.results.data.message);
				setRequest(false);
			});
	}, []);

	const Image = styled.img`
		height: 300px;
		width: 300px;
	`;

	const Content = styled.div`
		width: 60%;
		margin: auto;
	`;

	const Paragraph = styled.p`
		text-align: center;
	`;

	return (
		<div className="App">
			{request === false ? (
				<div>
					<h1>Request failed. {msg}</h1>
				</div>
			) : (
				<Content>
					<h1>Astronomy Picture of the Day</h1>
					<p>{data.date}</p>
					<Image src={data.url} alt="Nasa" />
					<h2>{data.title}</h2>
					<Paragraph>{data.explanation}</Paragraph>
				</Content>
			)}
		</div>
	);
}

export default App;
