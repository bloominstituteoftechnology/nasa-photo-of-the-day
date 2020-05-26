import React, { useContext } from 'react';
import { MainContext } from '../contexts/MainContext';
import { Spinner } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Title = () => {
	const { title } = useContext(MainContext);
	return (
		<>
			{!title && (
				<>
					<Spinner
						type='grow'
						color='secondary'
						style={{ width: '10rem', height: '10rem' }}
					/>
					<p>Loading...</p>
				</>
			)}

			{title && <h3 className='mb-5'>{title}</h3>}
		</>
	);
};

export default Title;
