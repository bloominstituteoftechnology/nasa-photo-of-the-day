import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import { MainContext } from '../contexts/MainContext';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

const Calender = () => {
	const { setDate } = useContext(MainContext);
	const [newDate, setNewDate] = useState(new Date());
	return (
		<DatePicker
			dateFormat='yyyy-MM-dd'
			selected={newDate}
			onChange={(date) => {
				setNewDate(date);
				setDate(moment(date).format('yyyy-MM-DD'));
			}}
		/>
	);
};

export default Calender;
