import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Card.scss';
import Moment from 'react-moment';
import moment from 'moment';
import DatePicker from "react-datepicker";
 import "react-datepicker/dist/react-datepicker.css";

function Card() {
    const [ data, setData ] = useState({});
    const [date, setDate] = useState(new Date())
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

	const onChange = (date) => {
        setDate(date)
        console.log(date)
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
				<button className="dateSelector" onClick={toggleDate}>Select Image From Different Day</button>
                <DatePicker selected={date} id="toggle" className="hidden" onChange={onChange}
      />
			</form>
			<p>{data.explanation}</p>
		</div>
	);
}

export default Card;
