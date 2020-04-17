import React, { useState } from 'react';
import DateTime from 'react-datetime';
import { Card, CardHeader, CardBody, CardText, Col } from 'reactstrap';

export default function PhotoCard({ title, date, hdurl, explanation, changeDate }) {
	
	return (
		<Col>
			<Card>
				
				<CardHeader>
					<img src={hdurl} width="100%" />
					<h2>{title}</h2>
                    <DateTime
                    value={date}
					dateFormat="YYYY-MM-DD"
                    timeFormat={false}
                    closeOnSelect={true}
					onChange={(info) => {
                        let setDate = `${info.get('year')}-${info.get('month')}-${info.get('date')}` 
                        console.info(setDate);
                        
                        changeDate(setDate)
                         //STEP 3: RUN changeDate
                       
					}}
				/>
				</CardHeader>
				<CardBody>
					<CardText>{explanation}</CardText>
				</CardBody>
			</Card>
		</Col>
	);
}