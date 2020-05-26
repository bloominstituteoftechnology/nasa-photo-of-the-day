import React from 'react';
import './App.css';
import MainContextProvider from './contexts/MainContext';
import Header from './components/Header';
import Title from './components/Title';
import Image from './components/Image';
import Description from './components/Description';
import Calender from './components/Calender';

function App() {
	return (
		<div className='App'>
			<MainContextProvider>
				<Header />
				<Title />
				<Image />
				<Description />
				<Calender />
			</MainContextProvider>
		</div>
	);
}

export default App;
