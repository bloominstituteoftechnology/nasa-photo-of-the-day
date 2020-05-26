import React, { useContext, useState } from 'react';
import { MainContext } from '../contexts/MainContext';
import styled from 'styled-components';
import { Button, Collapse, Card, CardBody } from 'reactstrap';

const P = styled.p`
	font-size: 1.5rem;
	text-align: justify;
`;

const Description = () => {
	const { explanation } = useContext(MainContext);

	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<>
			{explanation && (
				<Button
					className='mt-5'
					color='secondary'
					onClick={toggle}
					style={{ marginBottom: '1rem' }}
				>
					More Info
				</Button>
			)}
			<Collapse isOpen={isOpen}>
				<Card>
					<CardBody>
						<P>{explanation}</P>
					</CardBody>
				</Card>
			</Collapse>
		</>
	);
};

export default Description;
