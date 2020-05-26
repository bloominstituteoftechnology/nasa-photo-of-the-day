import React, { useContext } from 'react';
import { MainContext } from '../contexts/MainContext';

const Description = () => {
	const { explanation } = useContext(MainContext);
	return <p>{explanation}</p>;
};

export default Description;
