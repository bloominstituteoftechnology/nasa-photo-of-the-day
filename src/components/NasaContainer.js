import React, {useState, useEffect} from "react";
import Photo from "./Photo";
import axios from "axios";

export default function NasaContainer() {

	const [photo, setPhoto] = useState([]);

	useEffect(() => {
		axios.get('https://api.nasa.gov/planetary/apod?api_key=lrq0zrAV7CP9pe52Zz7fBQfS4dvU7rdjBR5OoGFX')
		.then(res => {
			setPhoto(res.data);
		})
		.catch(err => {
			console.log("API Returned no data - ", err);
		})
	}, [])

	return (
		<div className="container">
			<Photo data={photo} />
		</div>
	)

}