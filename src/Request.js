import React, { useState, useEffect } from 'react'
import axios from 'axios'
//this module will hold axios request and it is the parent of wireframe component

export default function Request() {
const [photo, setPhoto] = useState([])
	useEffect(() => {
		axios
		.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
		.then(res => {
			console.log(res)
			setPhoto(res.data)
		})
		.catch(err => {
			console.log(err)
		})
	}, [])
	//the empty array makes sure that the use effect only calls the api once

	return (
		<p>
			{ photo.date } 
		</p> 
	)
}


