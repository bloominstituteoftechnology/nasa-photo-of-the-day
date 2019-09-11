import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import ImageCard from './components/ImageCard';

function App() {
	return (
		<div className="App">
			<h1>NASA's Picture of the Day!</h1>
			<span>{Date()}</span>
			<ImageCard />
		</div>
	);
}

export default App;
