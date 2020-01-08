import React from 'react';
import './App.scss';
import Card from './components/cardComponent/Card';
import { Link, Route } from 'react-router-dom';
import Some from './SomeComponent/Some';

function App() {
	return (
		<div className='App'>
			<Route exact path='/'>
				<Card />
			</Route>
			<Route exact path='/about'>
				<Some />
			</Route>
		</div>
	);
}

export default App;
