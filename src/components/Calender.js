import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import { MainContext } from '../contexts/MainContext';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import styled from 'styled-components';

const Label = styled.label`
	margin-right: 15px;
	font-size: 1.25rem;
`;

const Calender = () => {
	const { setDate } = useContext(MainContext);
	const [newDate, setNewDate] = useState(new Date());
	return (
		<>
			<Label>Choose a new date to see more photos...</Label>
			<DatePicker
				style={{ border: 'none' }}
				// className='mb-4 mt-4'
				dateFormat='yyyy-MM-dd'
				selected={newDate}
				onChange={(date) => {
					setNewDate(date);
					setDate(moment(date).format('yyyy-MM-DD'));
				}}
			/>
		</>
	);
};

export default Calender;
