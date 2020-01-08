import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Card.scss';
import Moment from 'react-moment';
import moment from 'moment';
import { NavLink } from 'react-router-dom';

function Card() {
	const [ data, setData ] = useState({});
	useEffect(() => {
		axios
			.get(`https://api.nasa.gov/planetary/apod?api_key=j8MvcwHy1qL4XgDz8qnCW7gFaf8MqNSuKALMSpAt`)
			.then((res) => setData(res.data));
	}, []);

	const toggleDate = (e) => {
		e.preventDefault();
		const input = document.getElementById('toggle');
		if (input.className.match('hidden')) {
			input.className = 'show';
		} else {
			input.className = 'hidden';
		}
	};

	const onChange = (e) => {
		e.persist();
		console.log(e);
		let date = e.target.valueAsDate;
		date = date.toUTCString();
		let formattedDate = moment(date).format('YYYY-MM-DD');
		console.log(formattedDate);
		axios
			.get(`https://api.nasa.gov/planetary/apod?api_key=JnWo6HiIwC9BG0xa2UyobaexzaMVqCbQi9h9hs6q&date=${formattedDate}`)
			.then((res) => setData(res.data))
			.catch((err) => console.log(err));
	};

	return (
		<div className='wrapper'>
			<h1>{data.title}</h1>
			<div className='date-wrapper'>
				<span className='date'>Photo From:</span>
				<Moment className='date' format='MM/DD/YYYY'>
					{data.date}
				</Moment>
			</div>
			<img alt={data.title} src={data.url} />
			<form>
				<button onClick={toggleDate}>Select Image From Different Day</button>
				<input id='toggle' onChange={onChange} className='hidden' type='date' />
			</form>
			<p>{data.explanation}</p>
		</div>
	);
}

export default Card;
