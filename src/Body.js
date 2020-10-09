import React from 'react';
import styled from 'styled-components';

const DetailsStyled = styled.div`background-color: red;`;

const Body = (props) => {
	return (
		<DetailsStyled>
			<h2>{props.data.title}</h2>
			<h2>{props.data.date}</h2>
			<h2>{props.data.copyright}</h2>
			<p>{props.data.explanation}</p>
		</DetailsStyled>
	);
};

export default Body;
