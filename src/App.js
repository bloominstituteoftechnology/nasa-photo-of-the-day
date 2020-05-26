import React from 'react';
import './App.css';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import MainContextProvider from './contexts/MainContext';
import Header from './components/Header';
import Title from './components/Title';
import Image from './components/Image';
import Description from './components/Description';
import Calender from './components/Calender';

function App() {
	return (
		<div className='App m-1'>
			<MainContextProvider>
				<Container fluid='lg'>
					<Row>
						<Col>
							<Header />
						</Col>
					</Row>
					<Row className='mt-5'>
						<Col>
							<Jumbotron fluid>
								<Title />

								<Image />
								<Description />
							</Jumbotron>
						</Col>
					</Row>
					<Row>
						<Col className='m-4'>
							<Calender />
						</Col>
					</Row>
				</Container>
			</MainContextProvider>
		</div>
	);
}

export default App;
