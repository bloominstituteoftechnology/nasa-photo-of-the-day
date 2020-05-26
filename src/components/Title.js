import React, { useContext } from 'react';
import { MainContext } from '../contexts/MainContext';

const Title = () => {
	const { title } = useContext(MainContext);
	return (
		<>
			{!title && <span>Loading...</span>}
			{title && <div>{title}</div>}
		</>
	);
};

export default Title;
