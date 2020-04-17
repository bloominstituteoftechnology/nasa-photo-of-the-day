import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PhotoCard from './PhotoCard';
import { Container, Row } from 'reactstrap';

export default function PhotoList() {
	const [ photos, setPhotos ] = useState([]);
	const [ photoDate, setPhotoDate ] = useState(today());
	//*STEP 1: DATE useSTATE*//


    //*TODAYS DATE*//
	function today() {
		const todaysDate = new Date();
		const month = todaysDate.getMonth() + 1;
		const year = todaysDate.getFullYear();
        const day = todaysDate.getDate();
        console.log(`${year}-${month}-${day}`)
		return `${year}-${month}-${day}`;
	};

	const didUpdate = () => {
		axios
			.get(
				`https://api.nasa.gov/planetary/apod?api_key=gYnwcG4GoyOCmTLGsqfyDSusWt7fp5sEQwyqJFvZ` //SET CURRENT STATE
			)
			.then((res) => {
				console.log(res.data);
				setPhotos(res.data);
			})
			.catch((err) => console.log('Error: ', err));
	};

	function changeDate(newDate) {
		setPhotoDate(newDate); 
		console.log('Changing: ', newDate);
	}
//* STEP 5: checking to see if date of photo updates*//
	useEffect(didUpdate, [ photoDate ]); 

	return (
		<Container>
			<Row>
				<PhotoCard
					title={photos.title}
					date={photos.date}
					hdurl={photos.hdurl}
					explanation={photos.explanation}
					changeDate={changeDate} 
				/>
			</Row>
		</Container>
	);
}