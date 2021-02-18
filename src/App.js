import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Componets/Navbar";
import TopLogo from "./Componets/TopLogo";
import AboveImage from "./Componets/aboveImage";
import Imagefile from "./Componets/Imagefile";
import ImageText from "./Componets/ImageText";
import axios from "axios";
import { BASE_URL, API_KEY } from "./constants/index";
import styled from "styled-components";

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
	return (
		<WynBaby>
			<TopLogo />
			<Navbar />
			<AboveImage date={nasaData.date} title={nasaData.title} />
			<Imagefile imageurl={nasaData.url} />
			<ImageText imagetext={nasaData.explanation} />
		</WynBaby>
	);
}
const WynBaby = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
`;

export default App;
