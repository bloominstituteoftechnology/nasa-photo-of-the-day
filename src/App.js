import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Componets/Navbar";
import TopLogo from "./Componets/TopLogo";
import Imagefile from "./Componets/Imagefile";
import ImageText from "./Componets/ImageText";
import axios from "axios";
import { BASE_URL, API_KEY } from "./constants/index";

function App() {
	const [nasaData, setNasaData] = useState({});
	useEffect(() => {
		axios
			.get(`${BASE_URL}?api_key=${API_KEY}`)
			.then((res) => {
				setNasaData(res.data);
			})
			.catch((err) => console.log(err));
	}, []);
	console.log(nasaData);
	return (
		<div className="App">
			<TopLogo />
			<Navbar />
			<h1>{nasaData.title}</h1>

			<p>
				The Nasa Photo of the Day for Today {nasaData.date} is ...{" "}
				<span role="img" aria-label="go!">
					🚀
				</span>
				!
			</p>
			<Imagefile imageurl={nasaData.url} />
			<ImageText imagetext={nasaData.explanation} />
		</div>
	);
}

export default App;
