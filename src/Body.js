import React from 'react';
import styled from 'styled-components';
import './App.css'

const Body = (props) => {
	return (
		<div className='dataContainer'>
			<h2>{props.data.title}</h2>
			<h2>{props.data.date}</h2>
			<h2>{props.data.copyright}</h2>
			<p>{props.data.explanation}</p>
		</div>
	);
};

export default Body;
